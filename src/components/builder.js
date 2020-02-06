<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("."));

var _Address = _interopRequireDefault(require("./address/Address.form"));

var _Base = _interopRequireDefault(require("./base/Base.form"));

var _Button = _interopRequireDefault(require("./button/Button.form"));

var _Checkbox = _interopRequireDefault(require("./checkbox/Checkbox.form"));

var _Columns = _interopRequireDefault(require("./columns/Columns.form"));

var _Container = _interopRequireDefault(require("./container/Container.form"));

var _Content = _interopRequireDefault(require("./content/Content.form"));

var _Currency = _interopRequireDefault(require("./currency/Currency.form"));

var _DataGrid = _interopRequireDefault(require("./datagrid/DataGrid.form"));

var _DataMap = _interopRequireDefault(require("./datamap/DataMap.form"));

var _DateTime = _interopRequireDefault(require("./datetime/DateTime.form"));

var _Day = _interopRequireDefault(require("./day/Day.form"));

var _EditGrid = _interopRequireDefault(require("./editgrid/EditGrid.form"));

var _EditTable = _interopRequireDefault(require("./edittable/EditTable.form"));

var _Email = _interopRequireDefault(require("./email/Email.form"));

var _Fieldset = _interopRequireDefault(require("./fieldset/Fieldset.form"));

var _File = _interopRequireDefault(require("./file/File.form"));

var _Form = _interopRequireDefault(require("./form/Form.form"));

var _Hidden = _interopRequireDefault(require("./hidden/Hidden.form"));

var _HTML = _interopRequireDefault(require("./html/HTML.form"));

var _Location = _interopRequireDefault(require("./location/Location.form"));

var _ModalEdit = _interopRequireDefault(require("./modaledit/ModalEdit.form"));

var _NestedComponent = _interopRequireDefault(require("./nested/NestedComponent.form"));

var _Number = _interopRequireDefault(require("./number/Number.form"));

var _Panel = _interopRequireDefault(require("./panel/Panel.form"));

var _Password = _interopRequireDefault(require("./password/Password.form"));

var _PhoneNumber = _interopRequireDefault(require("./phonenumber/PhoneNumber.form"));

var _Radio = _interopRequireDefault(require("./radio/Radio.form"));

var _ReCaptcha = _interopRequireDefault(require("./recaptcha/ReCaptcha.form"));

var _Resource = _interopRequireDefault(require("./resource/Resource.form"));

var _Select = _interopRequireDefault(require("./select/Select.form"));

var _SelectBoxes = _interopRequireDefault(require("./selectboxes/SelectBoxes.form"));

var _Signature = _interopRequireDefault(require("./signature/Signature.form"));

var _Survey = _interopRequireDefault(require("./survey/Survey.form"));

var _Table = _interopRequireDefault(require("./table/Table.form"));

var _Tabs = _interopRequireDefault(require("./tabs/Tabs.form"));

var _Tags = _interopRequireDefault(require("./tags/Tags.form"));

var _TextArea = _interopRequireDefault(require("./textarea/TextArea.form"));

var _TextField = _interopRequireDefault(require("./textfield/TextField.form"));

var _Time = _interopRequireDefault(require("./time/Time.form"));

var _Tree = _interopRequireDefault(require("./tree/Tree.form"));

var _Unknown = _interopRequireDefault(require("./unknown/Unknown.form"));

var _Url = _interopRequireDefault(require("./url/Url.form"));

var _Well = _interopRequireDefault(require("./well/Well.form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_.default.address.editForm = _Address.default;
_.default.base.editForm = _Base.default;
_.default.button.editForm = _Button.default;
_.default.checkbox.editForm = _Checkbox.default;
_.default.columns.editForm = _Columns.default;
_.default.container.editForm = _Container.default;
_.default.content.editForm = _Content.default;
_.default.currency.editForm = _Currency.default;
_.default.datagrid.editForm = _DataGrid.default;
_.default.datamap.editForm = _DataMap.default;
_.default.datetime.editForm = _DateTime.default;
_.default.day.editForm = _Day.default;
_.default.editgrid.editForm = _EditGrid.default;
_.default.edittable.editForm = _EditTable.default;
_.default.email.editForm = _Email.default;
_.default.fieldset.editForm = _Fieldset.default;
_.default.file.editForm = _File.default;
_.default.form.editForm = _Form.default;
_.default.hidden.editForm = _Hidden.default;
_.default.htmlelement.editForm = _HTML.default;
_.default.location.editForm = _Location.default;
_.default.modaledit.editForm = _ModalEdit.default;
_.default.nested.editForm = _NestedComponent.default;
_.default.number.editForm = _Number.default;
_.default.panel.editForm = _Panel.default;
_.default.password.editForm = _Password.default;
_.default.phoneNumber.editForm = _PhoneNumber.default;
_.default.radio.editForm = _Radio.default;
_.default.recaptcha.editForm = _ReCaptcha.default;
_.default.resource.editForm = _Resource.default;
_.default.select.editForm = _Select.default;
_.default.selectboxes.editForm = _SelectBoxes.default;
_.default.signature.editForm = _Signature.default;
_.default.survey.editForm = _Survey.default;
_.default.table.editForm = _Table.default;
_.default.tabs.editForm = _Tabs.default;
_.default.tags.editForm = _Tags.default;
_.default.textarea.editForm = _TextArea.default;
_.default.textfield.editForm = _TextField.default;
_.default.time.editForm = _Time.default;
_.default.tree.editForm = _Tree.default;
_.default.unknown.editForm = _Unknown.default;
_.default.url.editForm = _Url.default;
_.default.well.editForm = _Well.default;
var _default = _.default;
exports.default = _default;
=======
import Components from '.';
import AddressForm from './address/Address.form';
import ButtonForm from './button/Button.form';
import CheckboxForm from './checkbox/Checkbox.form';
import ColumnsForm from './columns/Columns.form';
import ContainerForm from './container/Container.form';
import ContentForm from './content/Content.form';
import CurrencyForm from './currency/Currency.form';
import DataGridForm from './datagrid/DataGrid.form';
import DataMapForm from './datamap/DataMap.form';
import DateTimeForm from './datetime/DateTime.form';
import DayForm from './day/Day.form';
import EditGridForm from './editgrid/EditGrid.form';
import EmailForm from './email/Email.form';
import FieldsetForm from './fieldset/Fieldset.form';
import FileForm from './file/File.form';
import FormForm from './form/Form.form';
import HiddenForm from './hidden/Hidden.form';
import HtmlElementForm from './html/HTML.form';
import NumberForm from './number/Number.form';
import PanelForm from './panel/Panel.form';
import PasswordForm from './password/Password.form';
import PhoneNumberForm from './phonenumber/PhoneNumber.form';
import RadioForm from './radio/Radio.form';
import ReCaptchaForm from './recaptcha/ReCaptcha.form';
import ResourceForm from './resource/Resource.form';
import SelectboxesForm from './selectboxes/SelectBoxes.form';
import SelectForm from './select/Select.form';
import SignatureForm from './signature/Signature.form';
import SurveyForm from './survey/Survey.form';
import TableForm from './table/Table.form';
import TabsForm from './tabs/Tabs.form';
import TagsForm from './tags/Tags.form';
import TextAreaForm from './textarea/TextArea.form';
import TextfieldForm from './textfield/TextField.form';
import TimeForm from './time/Time.form';
import TreeForm from './tree/Tree.form';
import UnknownForm from './unknown/Unknown.form';
import UrlForm from './url/Url.form';
import WellForm from './well/Well.form';

Components.address.editForm = AddressForm;
Components.button.editForm = ButtonForm;
Components.checkbox.editForm = CheckboxForm;
Components.columns.editForm = ColumnsForm;
Components.container.editForm = ContainerForm;
Components.content.editForm = ContentForm;
Components.currency.editForm = CurrencyForm;
Components.datagrid.editForm = DataGridForm;
Components.datamap.editForm = DataMapForm;
Components.datetime.editForm = DateTimeForm;
Components.day.editForm = DayForm;
Components.editgrid.editForm = EditGridForm;
Components.email.editForm = EmailForm;
Components.fieldset.editForm = FieldsetForm;
Components.file.editForm = FileForm;
Components.form.editForm = FormForm;
Components.hidden.editForm = HiddenForm;
Components.htmlelement.editForm = HtmlElementForm;
Components.number.editForm = NumberForm;
Components.panel.editForm = PanelForm;
Components.password.editForm = PasswordForm;
Components.phoneNumber.editForm = PhoneNumberForm;
Components.radio.editForm = RadioForm;
Components.recaptcha.editForm = ReCaptchaForm;
Components.resource.editForm = ResourceForm;
Components.select.editForm = SelectForm;
Components.selectboxes.editForm = SelectboxesForm;
Components.signature.editForm = SignatureForm;
Components.survey.editForm = SurveyForm;
Components.table.editForm = TableForm;
Components.tabs.editForm = TabsForm;
Components.tags.editForm = TagsForm;
Components.textarea.editForm = TextAreaForm;
Components.textfield.editForm = TextfieldForm;
Components.time.editForm = TimeForm;
Components.tree.editForm = TreeForm;
Components.unknown.editForm = UnknownForm;
Components.url.editForm = UrlForm;
Components.well.editForm = WellForm;

export default Components;
>>>>>>> newFormio
