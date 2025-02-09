import OrdersManagementLayout from '../../../components/Layouts/OrdersManagement';
import OrdersList from '../../../components/OrdersList/OrdersList';
import { useEffect, useState } from 'react';
import { getSellerPendingOrders } from '../../../services/sellerService';

function PendingOrders() {
    const [pendingOrders, setPendingOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getSellerPendingOrders();
            console.log(response);
            setPendingOrders(response);
        };
        fetchData();
    }, []);
    return (
        <OrdersManagementLayout>
            <OrdersList />
        </OrdersManagementLayout>
    );
}

export default PendingOrders;
