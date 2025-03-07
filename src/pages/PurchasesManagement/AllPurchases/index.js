import PurchasesManagementLayout from '../../../components/Layouts/PurchasesManagementLayout';
import PurchasesList from '../../../components/PurchasesList/PurchasesList';
import { useEffect, useState } from 'react';
import { getUserAllPurchases } from '../../../services/userService';

function PendingPurchases() {
    const [allPurchases, setAllPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const all_purchases = await getUserAllPurchases();
            console.log(getUserAllPurchases);
            setAllPurchases(all_purchases);
        };
        fetchData();
    }, []);
    return (
        <PurchasesManagementLayout>
            <PurchasesList products={allPurchases} />
        </PurchasesManagementLayout>
    );
}
export default PendingPurchases;
