<h1>React Dialog Window</h1>

Add to index.html `<div id="modal-root"></div>`. 
Pass the specified id to <code>elementId</code>.

<code>import { useDialogWindow } from "react-dialog-window";</code>

Create an object with the settings:
<pre>
const settings = {
    elementId: "modal-root",
    position: "center",
    blackout: true,
    title: "Title",
    color: "gray",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    buttons: {
        onClick: (e) => {
            console.log("onClick: ", e)
        },
        onClose: () => {
            console.log("onClose")
        }
    }
}
</pre>


Pass the settings to the hook:<br/>
<code>const { open } = useDialogWindow(settings);</code>

`<button onClick={open}>open</button>`

<h3>Settings</h3>  
<table>
    <tr>
        <th>props</th>
        <th>type</th>
        <th>values</th>
        <th>default</th>
        <th>description</th>
        <th>required</th>
    </tr>
    <tr>
        <td><code>elementId</code></td>
        <td><code>string</code></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>yes</td>
    </tr>
    <tr>
        <td><code>backgroundColor</code></td>
        <td><code>string</code></td>
        <td>-</td>
        <td><code>white</code></td>
        <td>Background color of the dialog box</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>blackout</code></td>
        <td><code>boolean</code></td>
        <td><code>true</code> or <code>false</code></td>
        <td><code>false</code></td>
        <td>Enable background dimming</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>position</code></td>
        <td><code>string</code></td>
        <td><code>top</code> or <code>center</code></td>
        <td><code>top</code></td>
        <td>Dialog box position</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>title</code></td>
        <td><code>string</code></td>
        <td>-</td>
        <td>-</td>
        <td>Title text</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>titleColor</code></td>
        <td><code>string</code></td>
        <td>-</td>
        <td>-</td>
        <td>Title color</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>text</code></td>
        <td><code>string</code></td>
        <td>-</td>
        <td>-</td>
        <td>Text</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>type</code></td>
        <td><code>string</code></td>
        <td><code>alert</code>, <code>confirm</code> or <code>prompt</code></td>
        <td><code>confirm</code></td>
        <td>Type of dialog box</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>animated</code></td>
        <td><code>boolean</code></td>
        <td><code>true</code> or <code>false</code></td>
        <td><code>true</code></td>
        <td>Enable animation</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>children</code></td>
        <td><code>React.ReactNode</code></td>
        <td>-</td>
        <td>-</td>
        <td>JSX component</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>color</code></td>
        <td><code>string</code></td>
        <td>-</td>
        <td>-</td>
        <td>Text color</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>buttons</code></td>
        <td><code>Object</code></td>
        <td>-</td>
        <td>-</td>
        <td>The button configuration object. Any of the standard buttons in the current implementation closes the dialog box.</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>buttons.titleSuccess</code></td>
        <td><code>string</code></td>
        <td>-</td>
        <td><code>Ok</code></td>
        <td>Success button title</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>buttons.titleReject</code></td>
        <td><code>string</code></td>
        <td>-</td>
        <td><code>Cancel</code></td>
        <td>Cancel button title</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>buttons.backgroundColor</code></td>
        <td><code>string</code></td>
        <td>-</td>
        <td><code>#027ad6</code></td>
        <td>Background color of buttons</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>buttons.onSuccess</code></td>
        <td><code>handler</code></td>
        <td>-</td>
        <td>-</td>
        <td>Success Button Handler</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>buttons.onReject</code></td>
        <td><code>handler</code></td>
        <td>-</td>
        <td>-</td>
        <td>Cancel button Handler</td>
        <td>not</td>
    </tr>
    <tr>
        <td><code>buttons.color</code></td>
        <td><code>string</code></td>
        <td>-</td>
        <td><code>white</code></td>
        <td>Button text color</td>
        <td>not</td>
    </tr>
</table>
