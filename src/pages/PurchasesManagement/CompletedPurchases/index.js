import PurchasesManagementLayout from '../../../components/Layouts/PurchasesManagementLayout';
import PurchasesList from '../../../components/PurchasesList/PurchasesList';
import { useEffect, useState } from 'react';
import { getUserCompletedPurchases } from '../../../services/userService';

function CompletedPurchases() {
    const [completedPurchases, setCompletedPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const completed_purchases = await getUserCompletedPurchases();
            console.log(completed_purchases);
            setCompletedPurchases(completed_purchases);
        };
        fetchData();
    }, []);
    return (
        <PurchasesManagementLayout>
            <PurchasesList products={completedPurchases} />
        </PurchasesManagementLayout>
    );
}
export default CompletedPurchases;
