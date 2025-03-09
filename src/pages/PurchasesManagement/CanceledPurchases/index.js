import PurchasesManagementLayout from '../../../components/Layouts/PurchasesManagementLayout';
import PurchasesList from '../../../components/PurchasesList/PurchasesList';
import { useEffect, useState } from 'react';
import { getUserCanceledPurchases } from '../../../services/userService';

function CanceledPurchases() {
    const [canceledPurchases, setCanceledPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const canceled_purchases = await getUserCanceledPurchases();
            console.log(canceled_purchases);
            setCanceledPurchases(canceled_purchases);
        };
        fetchData();
    }, []);
    return (
        <PurchasesManagementLayout>
            <PurchasesList products={canceledPurchases} />
        </PurchasesManagementLayout>
    );
}
export default CanceledPurchases;
