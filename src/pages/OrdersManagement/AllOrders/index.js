import OrdersManagementLayout from '../../../components/Layouts/OrdersManagement';
import OrdersList from '../../../components/OrdersList/OrdersList';
import { useEffect, useState } from 'react';
import { getSellerAllOrders } from '../../../services/sellerService';

function AllOrders() {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getSellerAllOrders();
            console.log(response);
            setAllOrders(response);
        };
        fetchData();
    }, []);
    return (
        <OrdersManagementLayout>
            <OrdersList orderData={allOrders} setOrderData={setAllOrders} />
        </OrdersManagementLayout>
    );
}

export default AllOrders;
