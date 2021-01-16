import React from 'react';
import FallbackHeader from './FallbackHeader';
const Header = React.lazy(() => import('container/mf-header'));

export default class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {}

    render() {
        if (this.state.hasError) {
            return <FallbackHeader/>
        }

        return (
            <React.Suspense fallback={<div>loading mf-header...</div>}>
                <Header/>
            </React.Suspense>
        )
    }
}