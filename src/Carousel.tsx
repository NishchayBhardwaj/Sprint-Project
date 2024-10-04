import React, {useState} from 'react';

const Carousel: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Commit');

    const handleButtonClick = (tab: string) => {
        setActiveTab(tab);
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'Commit':
                return <span className='expandable-text'><div>2e813de</div><div className='text-1'>Failed</div></span>
            case 'Analytics':
                return <span className='expandable-text'><div>32 Online Now</div><div className='text-2'>Analytics</div></span>
            case 'Upgrade':
                return <span className='expandable-text'><div>2 Days left in your trial</div><div className='text-3'>Billing</div></span>
            default:
                return <p>This is test 4.</p>
        }
    }

    return (
        <div className='carousel-container'>
            <div className="mb-4"> {renderContent()}
            </div>
            <div className='carousel-buttons'>
            <button className={activeTab === 'Commit' ? 'active' : 'inactive'} onClick={() => handleButtonClick('Commit')}>
                Commit
            </button>
            <button className={activeTab === 'Analytics' ? 'active' : 'inactive'} onClick={() => handleButtonClick('Analytics')}>
                Analytics
            </button>
            <button className={activeTab === 'Upgrade' ? 'active' : 'inactive'} onClick={() => handleButtonClick('Upgrade')}>
                Upgrade
            </button>
            </div>
        </div>
    )
}

export default Carousel;