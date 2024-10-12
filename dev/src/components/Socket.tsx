import {useState} from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const WebSocketClient = () => {
    const [connected, setConnected] = useState(false);
    const [items, setItems] = useState([]);
    const [todoInput, setTodoInput] = useState("");
    const baseUrl = "http://158.220.102.94:8082/api";
    const headers = {
        "Authorization": localStorage.getItem("socketToken"),
        "Content-Type": "application/json",
    };

    let stompClient = null;

    const connect = () => {
        const socket = new SockJS(`${baseUrl}/ws`);
        stompClient = Stomp.over(socket);

        stompClient.connect(
            headers,
            (frame) => {
                console.log("Connected: " + frame);
                setConnected(true);

                stompClient.subscribe("/user/topic/reservations/created", (message) => {
                    console.log("reservation" + message);
                    showNewReservation(JSON.parse(message.body));
                });
            },
            (error) => {
                console.error(error);
            }
        );

        fetch(`${baseUrl}/reservations`, {
            method: "GET",
            headers: headers,
        })
            .then((response) => response.json())
            .then((data) => {
                const reservations = data.data.map((element) => ({
                    id: element.id,
                    specialistUsername: element.specialistUsername,
                    customerUsername: element.customerUsername,
                    reservationDate: element.reservationDate,
                }));
                setItems(reservations);
            });
    };

    const showNewReservation = (element) => {
        setItems((prevItems) => [
            ...prevItems,
            {
                id: element.id,
                specialistUsername: element.specialistUsername,
                customerUsername: element.customerUsername,
                reservationDate: element.reservationDate,
            },
        ]);
    };

    const sendTodo = () => {
        const todoItem = {text: todoInput};
        setTodoInput("");
    };

    return (
        <div className="max-w-[500px]] mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-2xl font-bold mb-6 text-center">WebSocket Client</h1>
            <div className="space-y-4">
                <button
                    onClick={connect}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Connect
                </button>
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={todoInput}
                        onChange={(e) => setTodoInput(e.target.value)}
                        placeholder="Enter a todo item"
                        className="flex-grow border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                    />
                    <button
                        onClick={sendTodo}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-300"
                    >
                        Add Todo
                    </button>
                </div>
                <span className="text-gray-700">
                    Connected: {connected ? (
                    <span className="text-green-600 font-semibold">true</span>
                ) : (
                    <span className="text-red-600 font-semibold">false</span>
                )}
                </span>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Todo List</h2>
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="p-4 bg-gray-100 rounded shadow-sm flex flex-col space-y-2"
                        >
                            <p>
                                <span className="font-bold">ID:</span> {item.id}
                            </p>
                            <p>
                                <span className="font-bold">Specialist:</span>{" "}
                                {item.specialistUsername}
                            </p>
                            <p>
                                <span className="font-bold">Customer:</span>{" "}
                                {item.customerUsername}
                            </p>
                            <p>
                                <span className="font-bold">Date:</span>{" "}
                                {item.reservationDate}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WebSocketClient;