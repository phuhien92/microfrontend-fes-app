import React, { ReactElement } from 'react';
import { useProxy } from 'valtio';
import Store from 'container/store';

const DataComponent: React.FC<{
    children: (state: Store) => ReactElement<any,any>
}> = ({children}) => {
    const state = useProxy(Store);
    return children(state);
}

export default DataComponent;