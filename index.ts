import React from 'react';

import App from '@albanian-xrm/multi-switch/App';
import { IInputs, IOutputs } from '@albanian-xrm/multi-switch/generated/ManifestTypes';
import { CheckedHandler } from '@albanian-xrm/multi-switch/App.types';

export class MultiSwitch implements ComponentFramework.ReactControl<IInputs, IOutputs> {
  private checkboxes: boolean;
  private disabled: boolean;
  private notifyOutputChanged: () => void;
  private onChecked: CheckedHandler;
  private value: number[];
  private visible: boolean;

  /**
   * Empty constructor.
   */
  constructor() {}

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   */
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
    this.onChecked = (checked, value) => {
      if (checked) {
        this.value = [value, ...this.value.filter((oldValue) => oldValue !== value)];
      } else {
        this.value = this.value.filter((oldValue) => oldValue !== value);
      }
      this.notifyOutputChanged();
    };
  }

  private mapContextAndRender(context: ComponentFramework.Context<IInputs>) {
    this.disabled = context.mode.isControlDisabled;
    this.visible = context.mode.isVisible;
    this.value = context.parameters.selection.raw || [];
    this.checkboxes = context.parameters.controlType.raw === '1';
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
    this.mapContextAndRender(context);
    return React.createElement(
      App,
      {
        checkboxes: this.checkboxes,
        disabled: this.disabled,
        visible: this.visible,
        options: context.parameters.selection.attributes?.Options || [],
        selectedOptions: this.value,
        onChecked: this.onChecked,
      },
      null,
    );
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    return { selection: [...this.value] };
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {}
}
