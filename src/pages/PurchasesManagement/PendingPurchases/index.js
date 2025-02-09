import PurchasesManagementLayout from '../../../components/Layouts/PurchasesManagementLayout';
import PurchasesList from '../../../components/PurchasesList/PurchasesList';
import { useEffect, useState } from 'react';
import { getUserAllPurchases } from '../../../services/userService';

function PendingPurchases() {
    const [allPurchases, setAllPurchases] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const allPurchases = await getUserAllPurchases();
            console.log(allPurchases);
            setAllPurchases(allPurchases);
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
