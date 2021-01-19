import React, { useState } from 'react'
import { Tabs, Tab } from 'react-mdl';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/addTodo';

export const Filters = () => {

    const [activeTab, setactiveTab] = useState({ active: 0, title: 'All' });
    const dispatch = useDispatch();

    const tabs = ['All', 'Completed', 'Incomplete'];

    const handleTab = (id) => {
        dispatch(setFilter(tabs[id]))
        console.log(id);
    }

    return (
        <div className="demo-tabs">
            <Tabs activeTab={activeTab.active} onChange={(tabId) => handleTab(tabId)} ripple>
                {
                    tabs.map((tab, index) => {
                        return <Tab key={index}>{tab}</Tab>
                    })
                }
            </Tabs>     
        </div>
    )
}
