import PurchasesManagementLayout from '../../../components/Layouts/PurchasesManagementLayout';
import PurchasesList from '../../../components/PurchasesList/PurchasesList';
function AllPurchases() {
    return (
        <PurchasesManagementLayout>
            <PurchasesList />
            <PurchasesList />
        </PurchasesManagementLayout>
    );
}

export default AllPurchases;
