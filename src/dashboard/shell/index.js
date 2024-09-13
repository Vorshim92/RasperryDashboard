import Input from 'components/input/input';
import './index.css';
import { TextNormal } from 'components/typography';
import { useShellStore } from './shell.store';

// TODO: - History

export function WidgetShell({ shellName = "Shell", className, ...others } = {}) {
    const { lastCommand, lastCommandOutput, sendCommand } = useShellStore()
    const classNames = "app-widget" + (className ? " " + className : "")

    return <div className={classNames} {...others}>
        <div className='app-widget-cmd'>
            <Input className="app-input-flat" label="Send command" onEnter={sendCommand} value={lastCommand} />
            <div className='app-widget-ouput-wrapper'>
                <TextNormal>{lastCommandOutput}</TextNormal>
            </div>
        </div>
    </div>

}

export default WidgetShell;