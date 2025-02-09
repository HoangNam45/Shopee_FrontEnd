import PurchasesManagementLayout from '../../../components/Layouts/PurchasesManagementLayout';
import PurchasesList from '../../../components/PurchasesList/PurchasesList';
import { useEffect, useState } from 'react';
import { getUserPendingPurchases } from '../../../services/userService';

function PendingPurchases() {
    const [pendingPurchases, setPendingPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const pendingPurchases = await getUserPendingPurchases();
            console.log(pendingPurchases);
            setPendingPurchases(pendingPurchases);
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
