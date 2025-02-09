import OrdersManagementLayout from '../../../components/Layouts/OrdersManagement';
import OrdersList from '../../../components/OrdersList/OrdersList';

function AllOrders() {
    return (
        <OrdersManagementLayout>
            <OrdersList />
        </OrdersManagementLayout>
    );
}

export default AllOrders;
