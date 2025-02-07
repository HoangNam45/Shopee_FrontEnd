import PurchasesManagementLayout from '../../../components/Layouts/PurchasesManagementLayout';
import PurchasesList from '../../../components/PurchasesList/PurchasesList';

function PendingPurchases() {
    return (
        <PurchasesManagementLayout>
            <PurchasesList />
        </PurchasesManagementLayout>
    );
}
export default PendingPurchases;
