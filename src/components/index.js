<<<<<<< HEAD
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Address = _interopRequireDefault(require("./address/Address"));

var _Base = _interopRequireDefault(require("./base/Base"));

var _Button = _interopRequireDefault(require("./button/Button"));

var _Checkbox = _interopRequireDefault(require("./checkbox/Checkbox"));

var _Column = _interopRequireDefault(require("./columns/Column"));

var _Columns = _interopRequireDefault(require("./columns/Columns"));

var _Container = _interopRequireDefault(require("./container/Container"));

var _Content = _interopRequireDefault(require("./content/Content"));

var _Currency = _interopRequireDefault(require("./currency/Currency"));

var _DataGrid = _interopRequireDefault(require("./datagrid/DataGrid"));

var _DataMap = _interopRequireDefault(require("./datamap/DataMap"));

var _DateTime = _interopRequireDefault(require("./datetime/DateTime"));

var _Day = _interopRequireDefault(require("./day/Day"));

var _EditGrid = _interopRequireDefault(require("./editgrid/EditGrid"));

var _EditTable = _interopRequireDefault(require("./edittable/EditTable"));

var _Email = _interopRequireDefault(require("./email/Email"));

var _Fieldset = _interopRequireDefault(require("./fieldset/Fieldset"));

var _File = _interopRequireDefault(require("./file/File"));

var _Form = _interopRequireDefault(require("./form/Form"));

var _HTML = _interopRequireDefault(require("./html/HTML"));

var _Hidden = _interopRequireDefault(require("./hidden/Hidden"));

var _Location = _interopRequireDefault(require("./location/Location"));

var _ModalEdit = _interopRequireDefault(require("./modaledit/ModalEdit"));

var _NestedComponent = _interopRequireDefault(require("./nested/NestedComponent"));

var _Number = _interopRequireDefault(require("./number/Number"));

var _Panel = _interopRequireDefault(require("./panel/Panel"));

var _Password = _interopRequireDefault(require("./password/Password"));

var _PhoneNumber = _interopRequireDefault(require("./phonenumber/PhoneNumber"));

var _Radio = _interopRequireDefault(require("./radio/Radio"));

var _ReCaptcha = _interopRequireDefault(require("./recaptcha/ReCaptcha"));

var _Resource = _interopRequireDefault(require("./resource/Resource"));

var _Select = _interopRequireDefault(require("./select/Select"));

var _SelectBoxes = _interopRequireDefault(require("./selectboxes/SelectBoxes"));

var _Signature = _interopRequireDefault(require("./signature/Signature"));

var _Survey = _interopRequireDefault(require("./survey/Survey"));

var _Table = _interopRequireDefault(require("./table/Table"));

var _Tabs = _interopRequireDefault(require("./tabs/Tabs"));

var _Tags = _interopRequireDefault(require("./tags/Tags"));

var _TextArea = _interopRequireDefault(require("./textarea/TextArea"));

var _TextField = _interopRequireDefault(require("./textfield/TextField"));

var _Time = _interopRequireDefault(require("./time/Time"));

var _Tree = _interopRequireDefault(require("./tree/Tree"));

var _Unknown = _interopRequireDefault(require("./unknown/Unknown"));

var _Url = _interopRequireDefault(require("./url/Url"));

var _Well = _interopRequireDefault(require("./well/Well"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  address: _Address.default,
  base: _Base.default,
  button: _Button.default,
  checkbox: _Checkbox.default,
  column: _Column.default,
  columns: _Columns.default,
  container: _Container.default,
  content: _Content.default,
  currency: _Currency.default,
  datagrid: _DataGrid.default,
  datamap: _DataMap.default,
  datetime: _DateTime.default,
  day: _Day.default,
  editgrid: _EditGrid.default,
  edittable: _EditTable.default,
  email: _Email.default,
  fieldset: _Fieldset.default,
  file: _File.default,
  form: _Form.default,
  hidden: _Hidden.default,
  htmlelement: _HTML.default,
  location: _Location.default,
  modaledit: _ModalEdit.default,
  nested: _NestedComponent.default,
  number: _Number.default,
  panel: _Panel.default,
  password: _Password.default,
  phoneNumber: _PhoneNumber.default,
  radio: _Radio.default,
  recaptcha: _ReCaptcha.default,
  resource: _Resource.default,
  select: _Select.default,
  selectboxes: _SelectBoxes.default,
  signature: _Signature.default,
  survey: _Survey.default,
  table: _Table.default,
  tabs: _Tabs.default,
  tags: _Tags.default,
  textarea: _TextArea.default,
  textfield: _TextField.default,
  time: _Time.default,
  tree: _Tree.default,
  unknown: _Unknown.default,
  url: _Url.default,
  well: _Well.default
=======
import AddressComponent from './address/Address';
import ButtonComponent from './button/Button';
import CheckBoxComponent from './checkbox/Checkbox';
import ColumnsComponent from './columns/Columns';
import Component from './_classes/component/Component';
import ContainerComponent from './container/Container';
import ContentComponent from './content/Content';
import CurrencyComponent from './currency/Currency';
import DataGridComponent from './datagrid/DataGrid';
import DataMapComponent from './datamap/DataMap';
import DateTimeComponent from './datetime/DateTime';
import DayComponent from './day/Day';
import EditGridComponent from './editgrid/EditGrid';
import EmailComponent from './email/Email';
import FieldsetComponent from './fieldset/Fieldset';
import FileComponent from './file/File';
import FormComponent from './form/Form';
import HiddenComponent from './hidden/Hidden';
import Input from './_classes/input/Input';
import Multivalue from './_classes/multivalue/Multivalue';
import Field from './_classes/field/Field';
import HTMLComponent from './html/HTML';
import NestedComponent from './_classes/nested/NestedComponent';
import NumberComponent from './number/Number';
import PanelComponent from './panel/Panel';
import PasswordComponent from './password/Password';
import PhoneNumberComponent from './phonenumber/PhoneNumber';
import RadioComponent from './radio/Radio';
import ReCaptchaComponent from './recaptcha/ReCaptcha';
import ResourceComponent from './resource/Resource';
import SelectBoxesComponent from './selectboxes/SelectBoxes';
import SelectComponent from './select/Select';
import SignatureComponent from './signature/Signature';
import SurveyComponent from './survey/Survey';
import TableComponent from './table/Table';
import TabsComponent from './tabs/Tabs';
import TagsComponent from './tags/Tags';
import TextAreaComponent from './textarea/TextArea';
import TextFieldComponent from './textfield/TextField';
import TimeComponent from './time/Time';
import TreeComponent from './tree/Tree';
import UnknownComponent from './unknown/Unknown';
import UrlComponent from './url/Url';
import WellComponent from './well/Well';

export default {
  address: AddressComponent,
  base: Component,
  component: Component,
  button: ButtonComponent,
  checkbox: CheckBoxComponent,
  columns: ColumnsComponent,
  container: ContainerComponent,
  content: ContentComponent,
  currency: CurrencyComponent,
  datagrid: DataGridComponent,
  datamap: DataMapComponent,
  datetime: DateTimeComponent,
  day: DayComponent,
  editgrid: EditGridComponent,
  email: EmailComponent,
  input: Input,
  field: Field,
  multivalue: Multivalue,
  fieldset: FieldsetComponent,
  file: FileComponent,
  form: FormComponent,
  hidden: HiddenComponent,
  htmlelement: HTMLComponent,
  nested: NestedComponent,
  number: NumberComponent,
  panel: PanelComponent,
  password: PasswordComponent,
  phoneNumber: PhoneNumberComponent,
  radio: RadioComponent,
  recaptcha: ReCaptchaComponent,
  resource: ResourceComponent,
  select: SelectComponent,
  selectboxes: SelectBoxesComponent,
  signature: SignatureComponent,
  survey: SurveyComponent,
  table: TableComponent,
  tabs: TabsComponent,
  tags: TagsComponent,
  textarea: TextAreaComponent,
  textfield: TextFieldComponent,
  time: TimeComponent,
  tree: TreeComponent,
  unknown: UnknownComponent,
  url: UrlComponent,
  well: WellComponent,
>>>>>>> newFormio
};
exports.default = _default;