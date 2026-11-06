import { test, expect } from './fixtures';
import AxeBuilder from '@axe-core/playwright';

for (const width of [320, 390, 1280]) test(`contact email template and layout at ${width}px`, async ({page}) => {
 await page.setViewportSize({width,height:900});
 await page.goto('/contact/', {waitUntil:'domcontentloaded'});
 await expect(page.getByRole('heading', {name:'Business & partnerships',exact:true})).toBeVisible();
 await page.getByText('View the submission template',{exact:true}).click();
 await expect(page.locator('.contact-template pre')).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await expect(page.locator('#main-content')).not.toContainText('@gmail.com');
 if(width===1280) {
  const result=await new AxeBuilder({page}).include('#main-content').analyze();
  expect(result.violations.filter(v=>['serious','critical'].includes(v.impact??''))).toEqual([]);
 }
});

test('email clicks record intent once without sending template content to GA', async ({page}) => {
 await page.goto('/contact/',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>Array.isArray((window as Window & {dataLayer?:unknown[]}).dataLayer));
 await page.evaluate(()=>document.addEventListener('click',event=>{
  if((event.target as Element).closest('a[href^="mailto:"]'))event.preventDefault();
 },true));
 await page.getByRole('link',{name:'Submit a tool by email →',exact:true}).click();
 const events=await page.evaluate(()=>((window as unknown as {dataLayer?:ArrayLike<unknown>[]}).dataLayer??[]).filter(e=>e[0]==='event'&&e[1]==='contact_email_click').map(e=>Array.from(e)));
 expect(events).toEqual([['event','contact_email_click',{contact_type:'tool_submission',entry_point:'contact_page'}]]);
});
