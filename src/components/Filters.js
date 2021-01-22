import React, { useState } from 'react'
import { Tabs, Tab } from 'react-mdl';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/addTodo';
import { FILTERS } from '../constants/constants';

export const Filters = () => {

    const [activeTab, setactiveTab] = useState({ active: 0, title: 'All' });
    const dispatch = useDispatch();

    const tabs = [...FILTERS];

    const handleTab = (id) => {
        dispatch(setFilter(tabs[id].value))
    }

    return (
        <div className="demo-tabs">
            <Tabs activeTab={activeTab.active} onChange={(tabId) => handleTab(tabId)} ripple>
                {
                    tabs.map((tab, index) => {
                        return <Tab key={index}>{tab.label}</Tab>
                    })
                }
            </Tabs>
        </div>
    )
}
