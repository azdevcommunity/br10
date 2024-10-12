import {Spacer} from "@nextui-org/react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {columns, Service} from "@/data/columns";
import {DataTable} from "@/data/data-table";
import GalleryComponent from "@/components/gallery-component";
import {useIsMobile} from "@/hooks/useIsMobile.ts";
import {useToast} from "@/components/ui/use-toast";
import React, {useEffect, useState} from "react";
import {Toaster} from "@/components/ui/toaster.tsx";
import {ProductsComponent} from "@/components/ProductsComponent";
import {Booking} from "@/components/Booking.tsx";
import {useParams} from "react-router-dom";
import {TokenUtil} from "@/util/TokenUtil.ts";
import {HttpClient} from "@/util/HttpClient.ts";

const AvatarSection = ({data}) => {
    return (
        <div className="flex flex-row items-center">
            <Avatar className="h-14 w-14 rounded-xl cursor-pointer">
                <AvatarImage src={data?.profilePicture}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Spacer x={6}/>
            <div>
                <div className="font-bold text-xl max-sm:text-lg">{data?.username}</div>
                <div className="font-bold text-md  max-sm:text-lg">{data?.speciality}</div>
            </div>
        </div>
    )
}

const IconButton = ({children, onClick}: { children: React.ReactNode, onClick?: () => void }) => {
    return (
        <div
            className={`cursor-pointer w-32 h-9 rounded-xl flex justify-center items-center border border-primary 
            font-bold max-sm:w-full`} onClick={onClick}>
            {children}
        </div>
    );
};
const InfoSection = () => (
    <div className="w-80 h-72 hidden rounded-3xl bg-white ml-10 shadow-xl mb-10 p-5 pl-10 lg:flex flex-col space-y-2">
        <span className="font-bold text-2xl">İş saatları</span>
        <div className="mt-4 text-lg flex flex-col space-y-1">
            <span className="text-gray-500">B.E: 09:00 - 18:00</span>
            <span className="text-gray-500">Ç: 09:00 - 18:00</span>
            <span className="text-gray-500">Ç.A: 09:00 - 18:00</span>
            <span className="text-gray-500">C.A: 09:00 - 18:00</span>
            <span className="text-gray-500">Şən: 09:00 - 18:00</span>
            <span className="text-gray-500">Ba: 09:00 - 18:00</span>
        </div>
    </div>
);

const AddressSection = ({address}) => {

    const {toast} = useToast();

    return (
        <div
            className="w-80 h-32 rounded-3xl bg-white ml-10 shadow-xl mb-10 p-5 justify-between items-center lg:flex flex-col hidden">
            <span className="text-lg">{address}</span>
            <div className="flex justify-around w-full">
                <IconButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path
                            fillRule="evenodd"
                            d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </IconButton>
                <IconButton onClick={() => {
                    toast({
                        description: "Məkan kopyalandı",
                    })
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path
                            fillRule="evenodd"
                            d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5
                            1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3
                            3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107
                            1.487-.15Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </IconButton>
            </div>
            <Toaster/>

        </div>
    );
};


export const MainPage = () => {

    const {specialistId} = useParams();
    const [profileData, setProfileDataData] = useState<any>(null)

    useEffect(() => {
        HttpClient.GET(`/specialist-profile/specialist/${specialistId}`)
            .then(response => response.json())
            .then(data => setProfileDataData(data.data))
            .catch(e => console.log(e))
    }, [specialistId]);

    const [data, setData] = useState<Service[]>([]);

    const fetchData = () => {
        const url = `${import.meta.env.VITE_BR10_API_BASE_URL}/specialist-service/specialist/${specialistId}`;
        const token = TokenUtil.getAccessToken()
        console.log('Token:', token)


        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(r => r.json())
            .then(res => res.data)
            .then(serviceData => {
                console.log(serviceData)
                setData(serviceData);
            })
            .catch(e => console.log(e))
    };

    useEffect(() => {
        fetchData();
    }, []);

    const isMobile = useIsMobile();

    const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

    const handleSelectionChange = (ids: number[]) => {
        setSelectedRowIds(ids);
    };

    useEffect(() => {
        console.log('Selected Row IDs:', selectedRowIds);
        console.log('Data:', data);
    }, [selectedRowIds]);


    const tableComponent = () => {
        return (
            <Tabs defaultValue="services" className="lg:w-full">
                <TabsList className="shadow-sm">
                    <TabsTrigger value="services">Xidmətlər</TabsTrigger>
                    <TabsTrigger value="gallery">Qalereya</TabsTrigger>
                    <TabsTrigger value="products">Mehsullar</TabsTrigger>
                    {isMobile && <TabsTrigger value="info">Məlumat</TabsTrigger>}
                </TabsList>
                <TabsContent value="services">
                    <div className={`max-[320px]:h-[21rem] max-sm:h-[21rem] h-[38rem] rounded-3xl shadow-lg lg:w-full 
                        w-80 bg-white pt-10 px-10 max-sm:px-0 max-sm:py-0 max-sm:pt-3 max-[320px]:px-3 max-[320px]:pt-8 
                        max-[320px]:shadow-none mb-3 relative`}>
                        <DataTable columns={columns} data={data} onSelectionChange={handleSelectionChange}/>
                    </div>
                </TabsContent>
                <TabsContent value="gallery">
                    <div className="max-sm:h-[23rem] h-[38rem] rounded-3xl shadow-lg lg:w-full w-80 bg-white pt-10
                        px-10 overflow-auto max-[320px]:px-5 max-[320px]:pt-5 mb-3">
                        <GalleryComponent/>
                    </div>
                </TabsContent>
                {isMobile && (
                    <TabsContent value="info">
                        <div className="max-sm:h-[23rem] h-[38rem] rounded-3xl shadow-lg lg:w-full w-80 bg-white
                            pt-10 px-10 overflow-auto max-[320px]:px-5 max-[320px]:pt-5 mb-3">
                            <div>
                                <span className="font-bold text-2xl">Məlumat</span>
                                <Spacer y={2}/>
                                <span className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam auctor, nunc nec ultricies.</span>
                            </div>
                        </div>
                    </TabsContent>
                )}
                <TabsContent value="products">
                    <div className="max-sm:h-[23rem] h-[38rem] rounded-3xl shadow-lg lg:w-full w-80 bg-white pt-10
                        px-10 overflow-auto max-[320px]:px-5 max-[320px]:pt-5 mb-3">
                        <ProductsComponent/>
                    </div>
                </TabsContent>
            </Tabs>
        )
    }

    return (
        <div className="h-screen w-full flex lg:flex-row flex-col pt-10 max-[320px]:pt-0 max-sm:px-3">
            <div
                className="flex flex-col items-start justify-start space-y-5 max-sm:justify-center max-sm:items-center">
                <div className="rounded-3xl w-80 max-sm:w-full max-sm:rounded-none max-sm:shadow-none max-sm:px-0 p-10
                pt-0 max-[320px]:py-6 flex flex-col justify-between lg:mx-10 max-[320px]:w-72 mt-10 max-sm:mt-7
                shadow-xl space-y-8 max-[320px]:space-y-7">
                    <AvatarSection data={profileData}/>
                    <div className="flex flex-row space-x-4 max-sm:space-x-3 justify-center items-center">
                        <IconButton>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="size-6 max-sm:h-6 max-sm:w-6">
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875
                                    0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697
                                    6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423
                                    1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3
                                    3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </IconButton>
                        <IconButton>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="size-6 max-sm:h-6 max-sm:w-6">
                                <path
                                    fillRule="evenodd"
                                    d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182
                                    1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75
                                    9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814
                                    1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0
                                    0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25
                                    0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </IconButton>
                    </div>
                </div>
                <InfoSection/>
                <AddressSection address={`${profileData?.city} ${profileData?.address}` }/>
            </div>
            <div className={`w-full flex lg:pr-10 max-sm:px-0 px-10 max-sm:justify-center max-sm:items-center h-fit
            max-[320px]:w-full max-[320px]:pt-8 p-0 `}>
                {selectedRowIds.length ? (
                    <Booking data={data} selectedIds={selectedRowIds}/>
                ) : tableComponent()}
            </div>
        </div>
    );

};