import OrdersManagementLayout from '../../../components/Layouts/OrdersManagement';
import OrdersList from '../../../components/OrdersList/OrdersList';
import { useEffect, useState } from 'react';
import { getSellerCanceledOrders } from '../../../services/sellerService';

function CanceledOrders() {
    const [canceledOrders, setCanceledOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getSellerCanceledOrders();
            console.log(response);
            setCanceledOrders(response);
        };
        fetchData();
    }, []);
    return (
        <OrdersManagementLayout>
            <OrdersList orderData={canceledOrders} />
        </OrdersManagementLayout>
    );
}

export default CanceledOrders;
