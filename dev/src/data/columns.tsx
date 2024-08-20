// @ts-ignore
// @ts-ignore

"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Checkbox} from "@/components/ui/checkbox"

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    service: string
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected()
                        ? true
                        : table.getIsSomePageRowsSelected()
                            ? 'indeterminate'
                            : false
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
    },
    {
        accessorKey: "service",
        header: () => <div>Xidmət</div>,
        cell: ({row}) => {
            const email = row.getValue("service")

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return <div>{email}</div>
        },
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Qiymət</div>,
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "AZN",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
]
