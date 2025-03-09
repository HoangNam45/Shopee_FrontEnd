import PurchasesManagementLayout from '../../../components/Layouts/PurchasesManagementLayout';
import PurchasesList from '../../../components/PurchasesList/PurchasesList';
import { useEffect, useState } from 'react';
import { getUserShippingPurchases } from '../../../services/userService';

function ShippingPurchases() {
    const [shippingPurchases, setShippingPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const shipping_purchases = await getUserShippingPurchases();
            console.log(shipping_purchases);
            setShippingPurchases(shipping_purchases);
        };
        fetchData();
    }, []);
    return (
        <PurchasesManagementLayout>
            <PurchasesList products={shippingPurchases} />
        </PurchasesManagementLayout>
    );
}
export default ShippingPurchases;
