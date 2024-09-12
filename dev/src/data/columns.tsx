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
        accessorKey: "name",
        header: () => <div>Xidmət</div>,
        cell: ({ row }) => {
            const name:string = row.getValue("name");
            return <div className={" w-max"}>{name}</div>;
        },
    },
    {
        accessorKey: "duration",
        header: () => <div className="text-right flex">Duration</div>,
        cell: ({ row }) => {
            // Get the duration value as a string and convert it to a number
            const duration: number = parseInt(row.getValue("duration"), 10);

            // Calculate hours and remaining minutes
            const hours = Math.floor(duration / 60);
            const minutes = duration % 60;

            // Format the duration for display
            const formattedDuration =
                hours > 0
                    ? `${hours} saat${minutes > 0 ? ` ${minutes} dəqiqə` : ""}`
                    : `${minutes} dəqiqə`;

            return <Badge variant="outline" className={"cursor-default w-max"}>{formattedDuration}</Badge>;
        },
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Qiymət</div>,
        cell: ({ row }) => {
            const price:number = row.getValue("price");
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "AZN",
            }).format(price);
            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
]
