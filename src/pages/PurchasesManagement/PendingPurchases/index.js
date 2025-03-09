import PurchasesManagementLayout from '../../../components/Layouts/PurchasesManagementLayout';
import PurchasesList from '../../../components/PurchasesList/PurchasesList';
import { useEffect, useState } from 'react';
import { getUserPendingPurchases } from '../../../services/userService';

function PendingPurchases() {
    const [pendingPurchases, setPendingPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const pending_purchases = await getUserPendingPurchases();
            console.log(pending_purchases);
            setPendingPurchases(pending_purchases);
        };
        fetchData();
    }, []);
    return (
        <PurchasesManagementLayout>
            <PurchasesList products={pendingPurchases} />
        </PurchasesManagementLayout>
    );
}
export default PendingPurchases;
