"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Checkbox} from "@/components/ui/checkbox"
import {Badge} from "@/components/ui/badge.tsx";

export type Service = {
    id: number;
    specialistUserId: number;
    duration: number;
    name: string;
    price: number;
    description: string;
    image: string | null;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const columns: ColumnDef<Service>[] = [
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
        cell: ({ row }) => {
            const service:string = row.getValue("service");
            return <div>{service}</div>;
        },
    },
    {
        accessorKey: "duration",
        header: () => <div className="text-right flex">Duration</div>,
        cell: ({ row }) => {
            const duration:string = row.getValue("duration");
            return <Badge variant="outline" className={"cursor-default"}>{duration}</Badge>;
        },
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Qiymət</div>,
        cell: ({ row }) => {
            const amount:number = row.getValue("amount");
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "AZN",
            }).format(amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
]
