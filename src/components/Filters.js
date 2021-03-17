import React, { useState } from 'react'
import { Tabs, Tab } from 'react-mdl';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/addTodo';
import { FILTERS } from '../constants/constants';

export const Filters = () => {

    const dispatch = useDispatch();
    const [active, setActive] = useState(0)

    const tabs = [...FILTERS];

    const handleTab = (id) => {
        setActive(id);
        dispatch(setFilter(tabs[id].value))
    }

    return (
        <div className="demo-tabs">
            <div className='tabs'>
            <Tabs activeTab={active} onChange={(tabId) => handleTab(tabId)} ripple>
                {
                    tabs.map((tab, index) => {
                        return <Tab key={index}>{tab.label}</Tab>
                    })
                }
            </Tabs>
            </div>
            <div className='tabs-mobile'>
            <Tabs activeTab={active} onChange={(tabId) => handleTab(tabId)} ripple>
                {
                    tabs.map((tab, index) => {
                        return <Tab key={index}>{tab.labelMobile}</Tab>
                    })
                }
            </Tabs>
            </div>
        </div>
    )
}
