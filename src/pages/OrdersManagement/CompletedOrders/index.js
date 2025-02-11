import OrdersManagementLayout from '../../../components/Layouts/OrdersManagement';
import OrdersList from '../../../components/OrdersList/OrdersList';
import { useEffect, useState } from 'react';
import { getSellerCompletedOrders } from '../../../services/sellerService';

function CompletedOrders() {
    const [completedOrders, setCompletedOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getSellerCompletedOrders();
            console.log(response);
            setCompletedOrders(response);
        };
        fetchData();
    }, []);
    return (
        <OrdersManagementLayout>
            <OrdersList orderData={completedOrders} />
        </OrdersManagementLayout>
    );
}

export default CompletedOrders;
