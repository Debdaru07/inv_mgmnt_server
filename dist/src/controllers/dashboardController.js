"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardMetrics = void 0;
const __1 = require("..");
const getDashboardMetrics = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const popularProducts = yield __1.prisma.products.findMany({
            take: 40,
            orderBy: {
                stockQuantity: "desc",
            }
        });
        const salesSummary = yield __1.prisma.salesSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        const purchaseSummary = yield __1.prisma.purchaseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        const expenseSummary = yield __1.prisma.expenseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        const expenseByCategorySummaryRaw = yield __1.prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        const expenseByCategory = expenseByCategorySummaryRaw.map((item) => (Object.assign(Object.assign({}, item), { amount: item.amount.toString() })));
        res.json({
            popularProducts,
            salesSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategory
        });
    }
    catch (err) {
        res.status(500).json({ message: "Error retrieving dashboard metrics" });
    }
});
exports.getDashboardMetrics = getDashboardMetrics;
