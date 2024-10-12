import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Clock, DollarSign} from "lucide-react"
import {Service} from "@/data/columns.tsx";


interface BookedServicesCardProps {
    bookedServices: Service[]
}

export const BookedServicesCard = ({bookedServices, selectedIds}) => {

    bookedServices = bookedServices.filter(booking => selectedIds.includes(booking.id));

    const totalPrice = bookedServices.reduce((sum, service) => sum + service.price, 0)

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>
                    Bron edilmiş xidmətlər
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-full pr-4">
                    {bookedServices.map((service) => (
                        <div key={service.id} className="mb-4 last:mb-0">
                            <h3 className="font-semibold">{service.name}</h3>
                            <div className="flex justify-between text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Clock className="mr-1 h-4 w-4"/>
                    {service.duration} min
                </span>
                                <span className="flex items-center">
                                    {service.price.toFixed(2)} AZN
                </span>
                            </div>
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-between mt-5">
                <span className="font-semibold">Ümumi</span>
                <span className="font-semibold">{totalPrice.toFixed(2)} AZN</span>
            </CardFooter>
        </Card>
    )
}