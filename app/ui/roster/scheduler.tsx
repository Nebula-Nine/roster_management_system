'use client'
import {
  Week, Month, ScheduleComponent, ViewsDirective, ViewDirective, EventSettingsModel, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop, TimelineViews, TimelineMonth
} from '@syncfusion/ej2-react-schedule';
import { timelineResourceData } from './datasource';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXpcd3RTRWVcUkJyXUE=');

export default function Scheduler() {
  const eventSettings: EventSettingsModel = { dataSource: timelineResourceData }
  const group = { byGroupID: false, resources: ['Projects', 'Categories'], orientation: 'Vertical' }

  const categoryData: Object[] = [
    { text: 'John', id: 1, color: '#1aaa55' },
    { text: 'Tom', id: 2, color: '#7fa900' },
    { text: 'Frank', id: 3, color: '#7fa900' },
    { text: 'David', id: 4, color: '#7fa900' },
  ];
  const timeScale = { enable: false };

  return (
    <>
      <ScheduleComponent width='100%' height='100%' currentView='TimelineWeek' eventSettings={eventSettings} group={group} timeScale={timeScale} firstDayOfWeek={1} >
        <ViewsDirective>
          <ViewDirective option='TimelineWeek' />
          <ViewDirective option='TimelineMonth' />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective field='TaskId' title='Category' name='Categories' allowMultiple={true}
            dataSource={categoryData} textField='text' idField='id' colorField='color'>
          </ResourceDirective>
        </ResourcesDirective>
        <Inject services={[TimelineViews, TimelineMonth, Week, Month, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </>
  )
}