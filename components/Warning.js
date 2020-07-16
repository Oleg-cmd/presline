import Link from 'next/link'

const Warning = () => (
 <div>
     <div className="alert alert-dismissible alert-warning">
         <button type="button" className="close" data-dismiss="alert" data-placement="bottom" data-original-title="Tooltip on bottom">&times;</button>
         <h4 className="alert-heading">Warning!</h4>
         <p className="mb-0">
             The site is under construction, if you have a complaint or suggestion, you can write them to us at this address:
            <a className="alert-link" href="mailto:presline.info@gmail.com">presline.info@gmail.com</a>.
         </p>
     </div>
 </div>
)
export default Warning