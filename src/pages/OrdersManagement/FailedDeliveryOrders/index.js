import OrdersManagementLayout from '../../../components/Layouts/OrdersManagement';
import OrdersList from '../../../components/OrdersList/OrdersList';
import { useEffect, useState } from 'react';
import { getSellerFailedDeliveryOrders } from '../../../services/sellerService';

function FailedDeliveryOrders() {
    const [failedDeliveryOrders, setFailedDeliveryOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getSellerFailedDeliveryOrders();
            console.log(response);
            setFailedDeliveryOrders(response);
        };
        fetchData();
    }, []);
    return (
        <OrdersManagementLayout>
            <OrdersList orderData={failedDeliveryOrders} />
        </OrdersManagementLayout>
    );
}

export default FailedDeliveryOrders;
