import React, { useState } from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  BlockHeader,
  List,
  ListItem,
  Stepper,
} from 'framework7-react';

export default () => {
  const [applesCount, setApplesCount] = useState(0);
  const [orangesCount, setOrangesCount] = useState(0);
  const [meetingTime, setMeetingTime] = useState(15);

  const meetingTimeComputed = () => {
    const value = meetingTime;

    const hours = Math.floor(value / 60);
    const minutes = value - hours * 60;
    const formatted = [];
    if (hours > 0) {
      formatted.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`);
    }
    if (minutes > 0) {
      formatted.push(`${minutes} minutes`);
    }
    return formatted.join(' ');
  };

  return (
    <Page>
      <Navbar title="Stepper" backLink="Back"></Navbar>
      <BlockTitle>Shape and size</BlockTitle>
      <Block strong outlineIos className="text-align-center">
        <div className="grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Default</small>
            <Stepper />
          </div>
          <div>
            <small className="display-block">Round</small>
            <Stepper round />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Fill</small>
            <Stepper fill />
          </div>
          <div>
            <small className="display-block">Round Fill</small>
            <Stepper fill round />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Small</small>
            <Stepper small />
          </div>
          <div>
            <small className="display-block">Small Round</small>
            <Stepper small round />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Small Fill</small>
            <Stepper small fill />
          </div>
          <div>
            <small className="display-block">Small Round Fill</small>
            <Stepper small round fill />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Large</small>
            <Stepper large />
          </div>
          <div>
            <small className="display-block">Large Round</small>
            <Stepper large round />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Large Fill</small>
            <Stepper large fill />
          </div>
          <div>
            <small className="display-block">Large Round Fill</small>
            <Stepper large round fill />
          </div>
        </div>
      </Block>

      <BlockTitle>Raised</BlockTitle>
      <Block strong outlineIos className="text-align-center">
        <div className="grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Default</small>
            <Stepper raised />
          </div>
          <div>
            <small className="display-block">Round</small>
            <Stepper raised round />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Fill</small>
            <Stepper raised fill />
          </div>
          <div>
            <small className="display-block">Round Fill</small>
            <Stepper raised fill round />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Small</small>
            <Stepper raised small />
          </div>
          <div>
            <small className="display-block">Small Round</small>
            <Stepper raised small round />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Small Fill</small>
            <Stepper raised small fill />
          </div>
          <div>
            <small className="display-block">Small Round Fill</small>
            <Stepper raised small round fill />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Large</small>
            <Stepper raised large />
          </div>
          <div>
            <small className="display-block">Large Round</small>
            <Stepper raised large round />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Large Fill</small>
            <Stepper raised large fill />
          </div>
          <div>
            <small className="display-block">Large Round Fill</small>
            <Stepper raised large round fill />
          </div>
        </div>
      </Block>
      <BlockTitle>Colors</BlockTitle>
      <Block strong outlineIos className="text-align-center">
        <div className="grid grid-cols-2 grid-gap">
          <div>
            <Stepper fill color="red" />
          </div>
          <div>
            <Stepper fill round color="green" />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <Stepper fill color="blue" />
          </div>
          <div>
            <Stepper fill round color="pink" />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <Stepper fill small color="yellow" />
          </div>
          <div>
            <Stepper fill small round color="orange" />
          </div>
        </div>

        <div className="margin-top grid grid-cols-2 grid-gap">
          <div>
            <Stepper fill small color="gray" />
          </div>
          <div>
            <Stepper fill small round color="black" />
          </div>
        </div>
      </Block>
      <BlockTitle>Without input element</BlockTitle>
      <Block strong outlineIos className="text-align-center">
        <div className="grid grid-cols-2 grid-gap">
          <div>
            <Stepper input={false} />
          </div>
          <div>
            <Stepper input={false} round />
          </div>
        </div>
      </Block>
      <BlockTitle>Min, max, step</BlockTitle>
      <Block strong outlineIos className="text-align-center">
        <div className="grid grid-cols-2 grid-gap">
          <div>
            <Stepper fill value={100} min={0} max={1000} step={100} />
          </div>
          <div>
            <Stepper fill input={false} value={5} min={0} max={10} step={0.5} />
          </div>
        </div>
      </Block>

      <BlockTitle>Autorepeat (Tap & hold)</BlockTitle>
      <BlockHeader>
        Pressing and holding one of its buttons increments or decrements the stepper’s value
        repeatedly. With dynamic autorepeat, the rate of change depends on how long the user
        continues pressing the control.
      </BlockHeader>
      <Block strong outlineIos className="text-align-center">
        <div className="grid grid-cols-2 grid-gap">
          <div>
            <small className="display-block">Default</small>
            <Stepper fill value={0} min={0} max={100} step={1} autorepeat={true} />
          </div>
          <div>
            <small className="display-block">Dynamic</small>
            <Stepper
              fill
              value={0}
              min={0}
              max={100}
              step={1}
              autorepeat={true}
              autorepeatDynamic={true}
            />
          </div>
        </div>
      </Block>

      <BlockTitle>Wraps</BlockTitle>
      <BlockHeader>
        In wraps mode incrementing beyond maximum value sets value to minimum value, likewise,
        decrementing below minimum value sets value to maximum value
      </BlockHeader>
      <Block strong outlineIos className="text-align-center">
        <Stepper fill value={0} min={0} max={10} step={1} autorepeat={true} wraps={true} />
      </Block>

      <BlockTitle>Custom value element</BlockTitle>
      <List outlineIos strongIos dividersIos>
        <ListItem title={`Apples ${applesCount}`}>
          <Stepper buttonsOnly={true} small raised slot="after" onStepperChange={setApplesCount} />
        </ListItem>
        <ListItem title={`Oranges ${orangesCount}`}>
          <Stepper buttonsOnly={true} small raised slot="after" onStepperChange={setOrangesCount} />
        </ListItem>
      </List>

      <BlockTitle>Custom value format</BlockTitle>
      <List outlineIos strongIos dividersIos>
        <ListItem header="Meeting starts in" title={meetingTimeComputed()}>
          <Stepper
            min={15}
            max={240}
            step={15}
            value={meetingTime}
            buttonsOnly={true}
            small
            fill
            raised
            slot="after"
            onStepperChange={setMeetingTime}
          />
        </ListItem>
      </List>

      <BlockTitle>Manual input</BlockTitle>
      <BlockHeader>
        It is possible to enter value manually from keyboard or mobile keypad. When click on input
        field, stepper enter into manual input mode, which allow type value from keyboar and check
        fractional part with defined accurancy. Click outside or enter Return key, ending manual
        mode.
      </BlockHeader>
      <Block strong outlineIos className="text-align-center">
        <Stepper
          fill
          value={0}
          min={0}
          max={1000}
          step={1}
          autorepeat={true}
          wraps={true}
          manualInputMode={true}
          decimalPoint={2}
        />
      </Block>
    </Page>
  );
};
