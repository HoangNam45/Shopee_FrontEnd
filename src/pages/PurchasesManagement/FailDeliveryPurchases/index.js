import PurchasesManagementLayout from '../../../components/Layouts/PurchasesManagementLayout';
import PurchasesList from '../../../components/PurchasesList/PurchasesList';
import { useEffect, useState } from 'react';
import { getUserFailDeliveryPurchases } from '../../../services/userService';

function FailDeliveryPurchases() {
    const [failDeliveryPurchases, setFailDeliveryPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const failDelivery_purchases = await getUserFailDeliveryPurchases();
            console.log(failDelivery_purchases);
            setFailDeliveryPurchases(failDelivery_purchases);
        };
        fetchData();
    }, []);
    return (
        <PurchasesManagementLayout>
            <PurchasesList products={failDeliveryPurchases} />
        </PurchasesManagementLayout>
    );
}
export default FailDeliveryPurchases;
