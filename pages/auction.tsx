
import { Auction } from '../components/AuctionComponent/Auction.component'
import { Template } from '../components/Template/Template/Template'
import { AuthGuard } from '../components/AuthGuard/AuthGuard.component';

export default function AuctionPage() {
    return (
        <AuthGuard>
            <Template>
                <Auction/>
            </Template>
        </AuthGuard>
    )
}
