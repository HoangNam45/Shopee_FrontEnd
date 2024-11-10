import { Fragment, Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from './components/Layouts';
import PrivateAccess from './components/PrivateAccess/PrivateAccess';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
dayjs.locale('vi');

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
            <Router>
                <div className="App">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            {/* PUBLIC ROUTES */}
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;

                                let Layout = DefaultLayout;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}

                            {/* PRIVATE ROUTES */}
                            {privateRoutes.map((route, index) => {
                                const Page = route.component;

                                let Layout = DefaultLayout;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <PrivateAccess>
                                                <Layout>
                                                    <Page />
                                                </Layout>
                                            </PrivateAccess>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </Suspense>
                </div>
            </Router>
        </LocalizationProvider>
    );
}

export default App;
