import {Switch, BrowserRouter, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import AdminPage from './AdminPage'
import HomePage from './HomePage'
import NewTripPage from './NewTripPage'
import RemoveTripPage from './RemoveTripPage'
import TripFormPage from './TripFormPage'
import TripsPage from './TripsPage'
import RemoveTripPage from './RemoveTripPage'



export default function Router() {
    return (
        <div>
            <BrowserRouter>
            <Switch>

                <Route exact path='/login'>
                    <LoginPage/>
                </Route>

                <Route exact path='/admin'>
                    <AdminPage/>
                </Route>

                <Route exact path='/admin/applications'>
                    <ApplicationsPage/>
                </Route>

                <Route exact path='/admin/removetrip'>
                    <RemoveTripPage/>
                </Route>

                <Route exact path='/admin/newtrip'>
                    <NewTripPage/>
                </Route>

                <Route exact path='/trips'>
                    <TripsPage/>
                </Route>

                <Route exact path='/tripform'>
                    <TripFormPage/>
                </Route>

                <Route exact path='/'>
                    <HomePage/>
                </Route>


            </Switch>
            </BrowserRouter>


        </div>
    )
}
