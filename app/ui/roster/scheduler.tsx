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

  const projectData: Object[] = [
    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
    { text: 'PROJECT 2', id: 2, color: '#56ca85' },
    { text: 'PROJECT 3', id: 3, color: '#df5286' },
  ];
  const categoryData: Object[] = [
    { text: 'Development', id: 1, color: '#1aaa55' },
    { text: 'Testing', id: 2, color: '#7fa900' }
  ];
  const timeScale = { enable: false };

  return (
    <>
      <ScheduleComponent width='100%' height='100%' currentView='TimelineWeek' eventSettings={eventSettings} group={group} timeScale={timeScale} firstDayOfWeek={1} >
        <ViewsDirective>
          <ViewDirective option='TimelineWeek' />
          <ViewDirective option='TimelineMonth' />
          {/* <ViewDirective option='Agenda' /> */}
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective field='ProjectId' title='Choose Project' name='Projects' allowMultiple={false}
            dataSource={projectData} textField='text' idField='id' colorField='color'>
          </ResourceDirective>
          <ResourceDirective field='TaskId' title='Category' name='Categories' allowMultiple={true}
            dataSource={categoryData} textField='text' idField='id' colorField='color'>
          </ResourceDirective>
        </ResourcesDirective>
        <Inject services={[TimelineViews, TimelineMonth, Week, Month, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </>
  )
}