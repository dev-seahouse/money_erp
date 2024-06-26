import {NgModule} from '@angular/core';
import { ThemeComponent } from './theme.component';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "angular/ng-bootstrap",
                "loadChildren": "./pages/default/angular/ng-bootstrap/ng-bootstrap.module#NgBootstrapModule"
            },
            {
                "path": "angular/primeng",
                "loadChildren": "./pages/default/angular/primeng/primeng.module#PrimengModule"
            },
            {
                "path": "index",
                "loadChildren": "./pages/default/index/index.module#IndexModule"
            },
            {
                "path": "components/base/typography",
                "loadChildren": "./pages/default/components/base/base-typography/base-typography.module#BaseTypographyModule"
            },
            {
                "path": "components/base/state",
                "loadChildren": "./pages/default/components/base/base-state/base-state.module#BaseStateModule"
            },
            {
                "path": "components/base/stack",
                "loadChildren": "./pages/default/components/base/base-stack/base-stack.module#BaseStackModule"
            },
            {
                "path": "components/base/tables",
                "loadChildren": "./pages/default/components/base/base-tables/base-tables.module#BaseTablesModule"
            },
            {
                "path": "components/base/modal",
                "loadChildren": "./pages/default/components/base/base-modal/base-modal.module#BaseModalModule"
            },
            {
                "path": "components/base/alerts",
                "loadChildren": "./pages/default/components/base/base-alerts/base-alerts.module#BaseAlertsModule"
            },
            {
                "path": "components/base/progress",
                "loadChildren": "./pages/default/components/base/base-progress/base-progress.module#BaseProgressModule"
            },
            {
                "path": "components/base/popover",
                "loadChildren": "./pages/default/components/base/base-popover/base-popover.module#BasePopoverModule"
            },
            {
                "path": "components/base/tooltip",
                "loadChildren": "./pages/default/components/base/base-tooltip/base-tooltip.module#BaseTooltipModule"
            },
            {
                "path": "components/base/blockui",
                "loadChildren": "./pages/default/components/base/base-blockui/base-blockui.module#BaseBlockuiModule"
            },
            {
                "path": "components/base/spinners",
                "loadChildren": "./pages/default/components/base/base-spinners/base-spinners.module#BaseSpinnersModule"
            },
            {
                "path": "components/base/scrollable",
                "loadChildren": "./pages/default/components/base/base-scrollable/base-scrollable.module#BaseScrollableModule"
            },
            {
                "path": "components/base/dropdown",
                "loadChildren": "./pages/default/components/base/base-dropdown/base-dropdown.module#BaseDropdownModule"
            },
            {
                "path": "components/base/tabs/bootstrap",
                "loadChildren": "./pages/default/components/base/tabs/tabs-bootstrap/tabs-bootstrap.module#TabsBootstrapModule"
            },
            {
                "path": "components/base/tabs/line",
                "loadChildren": "./pages/default/components/base/tabs/tabs-line/tabs-line.module#TabsLineModule"
            },
            {
                "path": "components/base/accordions",
                "loadChildren": "./pages/default/components/base/base-accordions/base-accordions.module#BaseAccordionsModule"
            },
            {
                "path": "components/base/navs",
                "loadChildren": "./pages/default/components/base/base-navs/base-navs.module#BaseNavsModule"
            },
            {
                "path": "components/base/lists",
                "loadChildren": "./pages/default/components/base/base-lists/base-lists.module#BaseListsModule"
            },
            {
                "path": "components/base/treeview",
                "loadChildren": "./pages/default/components/base/base-treeview/base-treeview.module#BaseTreeviewModule"
            },
            {
                "path": "components/base/bootstrap-notify",
                "loadChildren": "./pages/default/components/base/base-bootstrap-notify/base-bootstrap-notify.module#BaseBootstrapNotifyModule"
            },
            {
                "path": "components/base/toastr",
                "loadChildren": "./pages/default/components/base/base-toastr/base-toastr.module#BaseToastrModule"
            },
            {
                "path": "components/base/sweetalert2",
                "loadChildren": "./pages/default/components/base/base-sweetalert2/base-sweetalert2.module#BaseSweetalert2Module"
            },
            {
                "path": "components/icons/flaticon",
                "loadChildren": "./pages/default/components/icons/icons-flaticon/icons-flaticon.module#IconsFlaticonModule"
            },
            {
                "path": "components/icons/fontawesome5",
                "loadChildren": "./pages/default/components/icons/icons-fontawesome5/icons-fontawesome5.module#IconsFontawesome5Module"
            },
            {
                "path": "components/icons/lineawesome",
                "loadChildren": "./pages/default/components/icons/icons-lineawesome/icons-lineawesome.module#IconsLineawesomeModule"
            },
            {
                "path": "components/icons/socicons",
                "loadChildren": "./pages/default/components/icons/icons-socicons/icons-socicons.module#IconsSociconsModule"
            },
            {
                "path": "components/buttons/base/default",
                "loadChildren": "./pages/default/components/buttons/base/base-default/base-default.module#BaseDefaultModule"
            },
            {
                "path": "components/buttons/base/square",
                "loadChildren": "./pages/default/components/buttons/base/base-square/base-square.module#BaseSquareModule"
            },
            {
                "path": "components/buttons/base/pill",
                "loadChildren": "./pages/default/components/buttons/base/base-pill/base-pill.module#BasePillModule"
            },
            {
                "path": "components/buttons/base/air",
                "loadChildren": "./pages/default/components/buttons/base/base-air/base-air.module#BaseAirModule"
            },
            {
                "path": "components/buttons/group",
                "loadChildren": "./pages/default/components/buttons/buttons-group/buttons-group.module#ButtonsGroupModule"
            },
            {
                "path": "components/buttons/dropdown",
                "loadChildren": "./pages/default/components/buttons/buttons-dropdown/buttons-dropdown.module#ButtonsDropdownModule"
            },
            {
                "path": "components/buttons/icon/lineawesome",
                "loadChildren": "./pages/default/components/buttons/icon/icon-lineawesome/icon-lineawesome.module#IconLineawesomeModule"
            },
            {
                "path": "components/buttons/icon/fontawesome",
                "loadChildren": "./pages/default/components/buttons/icon/icon-fontawesome/icon-fontawesome.module#IconFontawesomeModule"
            },
            {
                "path": "components/buttons/icon/flaticon",
                "loadChildren": "./pages/default/components/buttons/icon/icon-flaticon/icon-flaticon.module#IconFlaticonModule"
            },
            {
                "path": "components/buttons/spinner",
                "loadChildren": "./pages/default/components/buttons/buttons-spinner/buttons-spinner.module#ButtonsSpinnerModule"
            },
            {
                "path": "components/portlets/base",
                "loadChildren": "./pages/default/components/portlets/portlets-base/portlets-base.module#PortletsBaseModule"
            },
            {
                "path": "components/portlets/advanced",
                "loadChildren": "./pages/default/components/portlets/portlets-advanced/portlets-advanced.module#PortletsAdvancedModule"
            },
            {
                "path": "components/portlets/creative",
                "loadChildren": "./pages/default/components/portlets/portlets-creative/portlets-creative.module#PortletsCreativeModule"
            },
            {
                "path": "components/portlets/tabbed",
                "loadChildren": "./pages/default/components/portlets/portlets-tabbed/portlets-tabbed.module#PortletsTabbedModule"
            },
            {
                "path": "components/portlets/draggable",
                "loadChildren": "./pages/default/components/portlets/portlets-draggable/portlets-draggable.module#PortletsDraggableModule"
            },
            {
                "path": "components/portlets/tools",
                "loadChildren": "./pages/default/components/portlets/portlets-tools/portlets-tools.module#PortletsToolsModule"
            },
            {
                "path": "components/portlets/sticky-head",
                "loadChildren": "./pages/default/components/portlets/portlets-sticky-head/portlets-sticky-head.module#PortletsStickyHeadModule"
            },
            {
                "path": "components/timeline/timeline-1",
                "loadChildren": "./pages/default/components/timeline/timeline-timeline-1/timeline-timeline-1.module#TimelineTimeline1Module"
            },
            {
                "path": "components/timeline/timeline-2",
                "loadChildren": "./pages/default/components/timeline/timeline-timeline-2/timeline-timeline-2.module#TimelineTimeline2Module"
            },
            {
                "path": "components/widgets/general",
                "loadChildren": "./pages/default/components/widgets/widgets-general/widgets-general.module#WidgetsGeneralModule"
            },
            {
                "path": "components/widgets/chart",
                "loadChildren": "./pages/default/components/widgets/widgets-chart/widgets-chart.module#WidgetsChartModule"
            },
            {
                "path": "components/calendar/basic",
                "loadChildren": "./pages/default/components/calendar/calendar-basic/calendar-basic.module#CalendarBasicModule"
            },
            {
                "path": "components/calendar/list-view",
                "loadChildren": "./pages/default/components/calendar/calendar-list-view/calendar-list-view.module#CalendarListViewModule"
            },
            {
                "path": "components/calendar/google",
                "loadChildren": "./pages/default/components/calendar/calendar-google/calendar-google.module#CalendarGoogleModule"
            },
            {
                "path": "components/calendar/external-events",
                "loadChildren": "./pages/default/components/calendar/calendar-external-events/calendar-external-events.module#CalendarExternalEventsModule"
            },
            {
                "path": "components/calendar/background-events",
                "loadChildren": "./pages/default/components/calendar/calendar-background-events/calendar-background-events.module#CalendarBackgroundEventsModule"
            },
            {
                "path": "components/charts/amcharts/charts",
                "loadChildren": "./pages/default/components/charts/amcharts/amcharts-charts/amcharts-charts.module#AmchartsChartsModule"
            },
            {
                "path": "components/charts/amcharts/stock-charts",
                "loadChildren": "./pages/default/components/charts/amcharts/amcharts-stock-charts/amcharts-stock-charts.module#AmchartsStockChartsModule"
            },
            {
                "path": "components/charts/amcharts/maps",
                "loadChildren": "./pages/default/components/charts/amcharts/amcharts-maps/amcharts-maps.module#AmchartsMapsModule"
            },
            {
                "path": "components/charts/flotcharts",
                "loadChildren": "./pages/default/components/charts/charts-flotcharts/charts-flotcharts.module#ChartsFlotchartsModule"
            },
            {
                "path": "components/charts/google-charts",
                "loadChildren": "./pages/default/components/charts/charts-google-charts/charts-google-charts.module#ChartsGoogleChartsModule"
            },
            {
                "path": "components/charts/morris-charts",
                "loadChildren": "./pages/default/components/charts/charts-morris-charts/charts-morris-charts.module#ChartsMorrisChartsModule"
            },
            {
                "path": "components/maps/google-maps",
                "loadChildren": "./pages/default/components/maps/maps-google-maps/maps-google-maps.module#MapsGoogleMapsModule"
            },
            {
                "path": "components/maps/jqvmap",
                "loadChildren": "./pages/default/components/maps/maps-jqvmap/maps-jqvmap.module#MapsJqvmapModule"
            },
            {
                "path": "components/utils/idle-timer",
                "loadChildren": "./pages/default/components/utils/utils-idle-timer/utils-idle-timer.module#UtilsIdleTimerModule"
            },
            {
                "path": "components/utils/session-timeout",
                "loadChildren": "./pages/default/components/utils/utils-session-timeout/utils-session-timeout.module#UtilsSessionTimeoutModule"
            },
            {
                "path": "crud/forms/controls/base",
                "loadChildren": "./pages/default/crud/forms/controls/controls-base/controls-base.module#ControlsBaseModule"
            },
            {
                "path": "crud/forms/controls/checkbox-radio",
                "loadChildren": "./pages/default/crud/forms/controls/controls-checkbox-radio/controls-checkbox-radio.module#ControlsCheckboxRadioModule"
            },
            {
                "path": "crud/forms/controls/switch",
                "loadChildren": "./pages/default/crud/forms/controls/controls-switch/controls-switch.module#ControlsSwitchModule"
            },
            {
                "path": "crud/forms/controls/input-group",
                "loadChildren": "./pages/default/crud/forms/controls/controls-input-group/controls-input-group.module#ControlsInputGroupModule"
            },
            {
                "path": "crud/forms/controls/option",
                "loadChildren": "./pages/default/crud/forms/controls/controls-option/controls-option.module#ControlsOptionModule"
            },
            {
                "path": "crud/forms/widgets/bootstrap-datepicker",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-datepicker/widgets-bootstrap-datepicker.module#WidgetsBootstrapDatepickerModule"
            },
            {
                "path": "crud/forms/widgets/bootstrap-datetimepicker",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-datetimepicker/widgets-bootstrap-datetimepicker.module#WidgetsBootstrapDatetimepickerModule"
            },
            {
                "path": "crud/forms/widgets/bootstrap-timepicker",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-timepicker/widgets-bootstrap-timepicker.module#WidgetsBootstrapTimepickerModule"
            },
            {
                "path": "crud/forms/widgets/bootstrap-daterangepicker",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-daterangepicker/widgets-bootstrap-daterangepicker.module#WidgetsBootstrapDaterangepickerModule"
            },
            {
                "path": "crud/forms/widgets/bootstrap-touchspin",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-touchspin/widgets-bootstrap-touchspin.module#WidgetsBootstrapTouchspinModule"
            },
            {
                "path": "crud/forms/widgets/bootstrap-maxlength",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-maxlength/widgets-bootstrap-maxlength.module#WidgetsBootstrapMaxlengthModule"
            },
            {
                "path": "crud/forms/widgets/bootstrap-switch",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-switch/widgets-bootstrap-switch.module#WidgetsBootstrapSwitchModule"
            },
            {
                "path": "crud/forms/widgets/bootstrap-multipleselectsplitter",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.module#WidgetsBootstrapMultipleselectsplitterModule"
            },
            {
                "path": "crud/forms/widgets/bootstrap-select",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-select/widgets-bootstrap-select.module#WidgetsBootstrapSelectModule"
            },
            {
                "path": "crud/forms/widgets/select2",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-select2/widgets-select2.module#WidgetsSelect2Module"
            },
            {
                "path": "crud/forms/widgets/typeahead",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-typeahead/widgets-typeahead.module#WidgetsTypeaheadModule"
            },
            {
                "path": "crud/forms/widgets/nouislider",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-nouislider/widgets-nouislider.module#WidgetsNouisliderModule"
            },
            {
                "path": "crud/forms/widgets/form-repeater",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-form-repeater/widgets-form-repeater.module#WidgetsFormRepeaterModule"
            },
            {
                "path": "crud/forms/widgets/ion-range-slider",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-ion-range-slider/widgets-ion-range-slider.module#WidgetsIonRangeSliderModule"
            },
            {
                "path": "crud/forms/widgets/input-mask",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-input-mask/widgets-input-mask.module#WidgetsInputMaskModule"
            },
            {
                "path": "crud/forms/widgets/autosize",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-autosize/widgets-autosize.module#WidgetsAutosizeModule"
            },
            {
                "path": "crud/forms/widgets/clipboard",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-clipboard/widgets-clipboard.module#WidgetsClipboardModule"
            },
            {
                "path": "crud/forms/widgets/dropzone",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-dropzone/widgets-dropzone.module#WidgetsDropzoneModule"
            },
            {
                "path": "crud/forms/widgets/recaptcha",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-recaptcha/widgets-recaptcha.module#WidgetsRecaptchaModule"
            },
            {
                "path": "crud/forms/widgets/summernote",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-summernote/widgets-summernote.module#WidgetsSummernoteModule"
            },
            {
                "path": "crud/forms/widgets/bootstrap-markdown",
                "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-markdown/widgets-bootstrap-markdown.module#WidgetsBootstrapMarkdownModule"
            },
            {
                "path": "crud/forms/layouts/default-forms",
                "loadChildren": "./pages/default/crud/forms/layouts/layouts-default-forms/layouts-default-forms.module#LayoutsDefaultFormsModule"
            },
            {
                "path": "crud/forms/layouts/multi-column-forms",
                "loadChildren": "./pages/default/crud/forms/layouts/layouts-multi-column-forms/layouts-multi-column-forms.module#LayoutsMultiColumnFormsModule"
            },
            {
                "path": "crud/forms/layouts/action-bars",
                "loadChildren": "./pages/default/crud/forms/layouts/layouts-action-bars/layouts-action-bars.module#LayoutsActionBarsModule"
            },
            {
                "path": "crud/forms/layouts/sticky-action-bar",
                "loadChildren": "./pages/default/crud/forms/layouts/layouts-sticky-action-bar/layouts-sticky-action-bar.module#LayoutsStickyActionBarModule"
            },
            {
                "path": "crud/forms/validation/states",
                "loadChildren": "./pages/default/crud/forms/validation/validation-states/validation-states.module#ValidationStatesModule"
            },
            {
                "path": "crud/forms/validation/form-controls",
                "loadChildren": "./pages/default/crud/forms/validation/validation-form-controls/validation-form-controls.module#ValidationFormControlsModule"
            },
            {
                "path": "crud/forms/validation/form-widgets",
                "loadChildren": "./pages/default/crud/forms/validation/validation-form-widgets/validation-form-widgets.module#ValidationFormWidgetsModule"
            },
            {
                "path": "crud/wizard/wizard-1",
                "loadChildren": "./pages/default/crud/wizard/wizard-wizard-1/wizard-wizard-1.module#WizardWizard1Module"
            },
            {
                "path": "crud/wizard/wizard-2",
                "loadChildren": "./pages/default/crud/wizard/wizard-wizard-2/wizard-wizard-2.module#WizardWizard2Module"
            },
            {
                "path": "crud/wizard/wizard-3",
                "loadChildren": "./pages/default/crud/wizard/wizard-wizard-3/wizard-wizard-3.module#WizardWizard3Module"
            },
            {
                "path": "crud/wizard/wizard-4",
                "loadChildren": "./pages/default/crud/wizard/wizard-wizard-4/wizard-wizard-4.module#WizardWizard4Module"
            },
            {
                "path": "crud/wizard/wizard-5",
                "loadChildren": "./pages/default/crud/wizard/wizard-wizard-5/wizard-wizard-5.module#WizardWizard5Module"
            },
            {
                "path": "crud/metronic-datatable/base/data-local",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-data-local/base-data-local.module#BaseDataLocalModule"
            },
            {
                "path": "crud/metronic-datatable/base/data-json",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-data-json/base-data-json.module#BaseDataJsonModule"
            },
            {
                "path": "crud/metronic-datatable/base/data-ajax",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-data-ajax/base-data-ajax.module#BaseDataAjaxModule"
            },
            {
                "path": "crud/metronic-datatable/base/record-selection",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-record-selection/base-record-selection.module#BaseRecordSelectionModule"
            },
            {
                "path": "crud/metronic-datatable/base/column-rendering",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-column-rendering/base-column-rendering.module#BaseColumnRenderingModule"
            },
            {
                "path": "crud/metronic-datatable/base/row-details",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-row-details/base-row-details.module#BaseRowDetailsModule"
            },
            {
                "path": "crud/metronic-datatable/base/column-width",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-column-width/base-column-width.module#BaseColumnWidthModule"
            },
            {
                "path": "crud/metronic-datatable/base/responsive-columns",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-responsive-columns/base-responsive-columns.module#BaseResponsiveColumnsModule"
            },
            {
                "path": "crud/metronic-datatable/base/translation",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-translation/base-translation.module#BaseTranslationModule"
            },
            {
                "path": "crud/metronic-datatable/base/local-sort",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-local-sort/base-local-sort.module#BaseLocalSortModule"
            },
            {
                "path": "crud/metronic-datatable/base/html-table",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-html-table/base-html-table.module#BaseHtmlTableModule"
            },
            {
                "path": "crud/metronic-datatable/base/auto-column-hide",
                "loadChildren": "./pages/default/crud/metronic-datatable/base/base-auto-column-hide/base-auto-column-hide.module#BaseAutoColumnHideModule"
            },
            {
                "path": "crud/metronic-datatable/scrolling/vertical",
                "loadChildren": "./pages/default/crud/metronic-datatable/scrolling/scrolling-vertical/scrolling-vertical.module#ScrollingVerticalModule"
            },
            {
                "path": "crud/metronic-datatable/scrolling/horizontal",
                "loadChildren": "./pages/default/crud/metronic-datatable/scrolling/scrolling-horizontal/scrolling-horizontal.module#ScrollingHorizontalModule"
            },
            {
                "path": "crud/metronic-datatable/scrolling/both",
                "loadChildren": "./pages/default/crud/metronic-datatable/scrolling/scrolling-both/scrolling-both.module#ScrollingBothModule"
            },
            {
                "path": "crud/metronic-datatable/locked/left",
                "loadChildren": "./pages/default/crud/metronic-datatable/locked/locked-left/locked-left.module#LockedLeftModule"
            },
            {
                "path": "crud/metronic-datatable/locked/right",
                "loadChildren": "./pages/default/crud/metronic-datatable/locked/locked-right/locked-right.module#LockedRightModule"
            },
            {
                "path": "crud/metronic-datatable/locked/both",
                "loadChildren": "./pages/default/crud/metronic-datatable/locked/locked-both/locked-both.module#LockedBothModule"
            },
            {
                "path": "crud/metronic-datatable/locked/html-table",
                "loadChildren": "./pages/default/crud/metronic-datatable/locked/locked-html-table/locked-html-table.module#LockedHtmlTableModule"
            },
            {
                "path": "crud/metronic-datatable/child/data-local",
                "loadChildren": "./pages/default/crud/metronic-datatable/child/child-data-local/child-data-local.module#ChildDataLocalModule"
            },
            {
                "path": "crud/metronic-datatable/child/data-ajax",
                "loadChildren": "./pages/default/crud/metronic-datatable/child/child-data-ajax/child-data-ajax.module#ChildDataAjaxModule"
            },
            {
                "path": "crud/metronic-datatable/api/methods",
                "loadChildren": "./pages/default/crud/metronic-datatable/api/api-methods/api-methods.module#ApiMethodsModule"
            },
            {
                "path": "crud/metronic-datatable/api/events",
                "loadChildren": "./pages/default/crud/metronic-datatable/api/api-events/api-events.module#ApiEventsModule"
            },
            {
                "path": "crud/datatables/basic/basic",
                "loadChildren": "./pages/default/crud/datatables/basic/basic-basic/basic-basic.module#BasicBasicModule"
            },
            {
                "path": "crud/datatables/basic/headers",
                "loadChildren": "./pages/default/crud/datatables/basic/basic-headers/basic-headers.module#BasicHeadersModule"
            },
            {
                "path": "crud/datatables/basic/paginations",
                "loadChildren": "./pages/default/crud/datatables/basic/basic-paginations/basic-paginations.module#BasicPaginationsModule"
            },
            {
                "path": "crud/datatables/basic/scrollable",
                "loadChildren": "./pages/default/crud/datatables/basic/basic-scrollable/basic-scrollable.module#BasicScrollableModule"
            },
            {
                "path": "crud/datatables/advanced/column-rendering",
                "loadChildren": "./pages/default/crud/datatables/advanced/advanced-column-rendering/advanced-column-rendering.module#AdvancedColumnRenderingModule"
            },
            {
                "path": "crud/datatables/advanced/multiple-controls",
                "loadChildren": "./pages/default/crud/datatables/advanced/advanced-multiple-controls/advanced-multiple-controls.module#AdvancedMultipleControlsModule"
            },
            {
                "path": "crud/datatables/advanced/column-visibility",
                "loadChildren": "./pages/default/crud/datatables/advanced/advanced-column-visibility/advanced-column-visibility.module#AdvancedColumnVisibilityModule"
            },
            {
                "path": "crud/datatables/advanced/row-callback",
                "loadChildren": "./pages/default/crud/datatables/advanced/advanced-row-callback/advanced-row-callback.module#AdvancedRowCallbackModule"
            },
            {
                "path": "crud/datatables/advanced/row-grouping",
                "loadChildren": "./pages/default/crud/datatables/advanced/advanced-row-grouping/advanced-row-grouping.module#AdvancedRowGroupingModule"
            },
            {
                "path": "crud/datatables/advanced/footer-callback",
                "loadChildren": "./pages/default/crud/datatables/advanced/advanced-footer-callback/advanced-footer-callback.module#AdvancedFooterCallbackModule"
            },
            {
                "path": "crud/datatables/data-sources/html",
                "loadChildren": "./pages/default/crud/datatables/data-sources/data-sources-html/data-sources-html.module#DataSourcesHtmlModule"
            },
            {
                "path": "crud/datatables/data-sources/javascript",
                "loadChildren": "./pages/default/crud/datatables/data-sources/data-sources-javascript/data-sources-javascript.module#DataSourcesJavascriptModule"
            },
            {
                "path": "crud/datatables/data-sources/ajax-client-side",
                "loadChildren": "./pages/default/crud/datatables/data-sources/data-sources-ajax-client-side/data-sources-ajax-client-side.module#DataSourcesAjaxClientSideModule"
            },
            {
                "path": "crud/datatables/data-sources/ajax-server-side",
                "loadChildren": "./pages/default/crud/datatables/data-sources/data-sources-ajax-server-side/data-sources-ajax-server-side.module#DataSourcesAjaxServerSideModule"
            },
            {
                "path": "crud/datatables/extensions/buttons",
                "loadChildren": "./pages/default/crud/datatables/extensions/extensions-buttons/extensions-buttons.module#ExtensionsButtonsModule"
            },
            {
                "path": "crud/datatables/extensions/colreorder",
                "loadChildren": "./pages/default/crud/datatables/extensions/extensions-colreorder/extensions-colreorder.module#ExtensionsColreorderModule"
            },
            {
                "path": "crud/datatables/extensions/keytable",
                "loadChildren": "./pages/default/crud/datatables/extensions/extensions-keytable/extensions-keytable.module#ExtensionsKeytableModule"
            },
            {
                "path": "crud/datatables/extensions/responsive",
                "loadChildren": "./pages/default/crud/datatables/extensions/extensions-responsive/extensions-responsive.module#ExtensionsResponsiveModule"
            },
            {
                "path": "crud/datatables/extensions/rowgroup",
                "loadChildren": "./pages/default/crud/datatables/extensions/extensions-rowgroup/extensions-rowgroup.module#ExtensionsRowgroupModule"
            },
            {
                "path": "crud/datatables/extensions/rowreorder",
                "loadChildren": "./pages/default/crud/datatables/extensions/extensions-rowreorder/extensions-rowreorder.module#ExtensionsRowreorderModule"
            },
            {
                "path": "crud/datatables/extensions/scroller",
                "loadChildren": "./pages/default/crud/datatables/extensions/extensions-scroller/extensions-scroller.module#ExtensionsScrollerModule"
            },
            {
                "path": "crud/datatables/extensions/select",
                "loadChildren": "./pages/default/crud/datatables/extensions/extensions-select/extensions-select.module#ExtensionsSelectModule"
            },
            {
                "path": "crud/datatables/search-options/column-search",
                "loadChildren": "./pages/default/crud/datatables/search-options/search-options-column-search/search-options-column-search.module#SearchOptionsColumnSearchModule"
            },
            {
                "path": "crud/datatables/search-options/advanced-search",
                "loadChildren": "./pages/default/crud/datatables/search-options/search-options-advanced-search/search-options-advanced-search.module#SearchOptionsAdvancedSearchModule"
            },
            {
                "path": "snippets/general/pricing-tables/pricing-table-1",
                "loadChildren": "./pages/aside-left-minimize-default-enabled/snippets/general/pricing-tables/pricing-tables-pricing-table-1/pricing-tables-pricing-table-1.module#PricingTablesPricingTable1Module"
            },
            {
                "path": "snippets/general/pricing-tables/pricing-table-2",
                "loadChildren": "./pages/aside-left-minimize-default-enabled/snippets/general/pricing-tables/pricing-tables-pricing-table-2/pricing-tables-pricing-table-2.module#PricingTablesPricingTable2Module"
            },
            {
                "path": "snippets/general/pricing-tables/pricing-table-3",
                "loadChildren": "./pages/aside-left-minimize-default-enabled/snippets/general/pricing-tables/pricing-tables-pricing-table-3/pricing-tables-pricing-table-3.module#PricingTablesPricingTable3Module"
            },
            {
                "path": "snippets/general/pricing-tables/pricing-table-4",
                "loadChildren": "./pages/aside-left-minimize-default-enabled/snippets/general/pricing-tables/pricing-tables-pricing-table-4/pricing-tables-pricing-table-4.module#PricingTablesPricingTable4Module"
            },
            {
                "path": "snippets/faq/faq-1",
                "loadChildren": "./pages/default/snippets/faq/faq-faq-1/faq-faq-1.module#FaqFaq1Module"
            },
            {
                "path": "snippets/invoices/invoice-1",
                "loadChildren": "./pages/default/snippets/invoices/invoices-invoice-1/invoices-invoice-1.module#InvoicesInvoice1Module"
            },
            {
                "path": "snippets/invoices/invoice-2",
                "loadChildren": "./pages/default/snippets/invoices/invoices-invoice-2/invoices-invoice-2.module#InvoicesInvoice2Module"
            },
            {
                "path": "header/actions",
                "loadChildren": "./pages/default/header/header-actions/header-actions.module#HeaderActionsModule"
            },
            {
                "path": "header/profile",
                "loadChildren": "./pages/default/header/header-profile/header-profile.module#HeaderProfileModule"
            },
            {
                "path": "404",
                "loadChildren": "./pages/default/not-found/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "snippets/pages/user/login-1",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-1/user-login-1.module#UserLogin1Module"
    },
    {
        "path": "snippets/pages/user/login-2",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-2/user-login-2.module#UserLogin2Module"
    },
    {
        "path": "snippets/pages/user/login-3",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-3/user-login-3.module#UserLogin3Module"
    },
    {
        "path": "snippets/pages/user/login-4",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-4/user-login-4.module#UserLogin4Module"
    },
    {
        "path": "snippets/pages/user/login-5",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-5/user-login-5.module#UserLogin5Module"
    },
    {
        "path": "snippets/pages/user/login-6",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-6/user-login-6.module#UserLogin6Module"
    },
    {
        "path": "snippets/pages/errors/error-1",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-1/errors-error-1.module#ErrorsError1Module"
    },
    {
        "path": "snippets/pages/errors/error-2",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-2/errors-error-2.module#ErrorsError2Module"
    },
    {
        "path": "snippets/pages/errors/error-3",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-3/errors-error-3.module#ErrorsError3Module"
    },
    {
        "path": "snippets/pages/errors/error-4",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.module#ErrorsError4Module"
    },
    {
        "path": "snippets/pages/errors/error-5",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-5/errors-error-5.module#ErrorsError5Module"
    },
    {
        "path": "snippets/pages/errors/error-6",
        "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-6/errors-error-6.module#ErrorsError6Module"
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ThemeRoutingModule {}