import OrdersManagementLayout from '../../../components/Layouts/OrdersManagement';
import OrdersList from '../../../components/OrdersList/OrdersList';
import { useEffect, useState } from 'react';
import { getSellerShippingOrders } from '../../../services/sellerService';

function ShippingOrders() {
    const [shippingOrders, setShippingOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getSellerShippingOrders();
            console.log(response);
            setShippingOrders(response);
        };
        fetchData();
    }, []);
    return (
        <OrdersManagementLayout>
            <OrdersList orderData={shippingOrders} setOrderData={setShippingOrders} />
        </OrdersManagementLayout>
    );
}

export default ShippingOrders;
