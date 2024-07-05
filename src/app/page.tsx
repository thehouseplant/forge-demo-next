'use client';

import { defineComponents } from '@tylertech/forge'

defineComponents();

export default function Home() {
  return (
    <div>
      <forge-scaffold>
        <forge-app-bar slot="header" title-text="Next.js Forge Demo">
          <forge-app-bar-menu-button slot="start"></forge-app-bar-menu-button>
          <forge-app-bar-search slot="center">
            <input type="text" placeholder="Search" />
          </forge-app-bar-search>
          <forge-app-bar-help-button slot="end"></forge-app-bar-help-button>
          <forge-app-bar-notification-button
            slot="end"
          ></forge-app-bar-notification-button>
          <forge-app-bar-app-launcher-button
            slot="end"
            allow-more="true"
          ></forge-app-bar-app-launcher-button>
          <forge-app-bar-profile-button
            slot="end"
            avatar-text="Sean Collins"
            full-name="Sean Collins"
            email="sean.collins@tylertech.com"
          ></forge-app-bar-profile-button>
        </forge-app-bar>
        <forge-drawer slot="body-left">
          <aside>
            <forge-list navlist>
              <forge-list-item selected>
                <forge-icon slot="start" name="category 1"></forge-icon>
                <a href="#">Category 1</a>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="category 2"></forge-icon>
                <a href="#">Category 2</a>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="category 3"></forge-icon>
                <a href="#">Category 3</a>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="category 4"></forge-icon>
                <a href="#">Category 4</a>
              </forge-list-item>
            </forge-list>
          </aside>
        </forge-drawer>

        <main slot="body">
          <forge-card>
            <h1>Accordion</h1>
            <forge-accordion>
              <forge-expansion-panel>
                <div slot="header">
                  Panel One
                  <forge-open-icon></forge-open-icon>
                </div>
                <div>Panel One Content</div>
              </forge-expansion-panel>
              <forge-divider></forge-divider>
              <forge-expansion-panel>
                <div slot="header">
                  Panel Two
                  <forge-open-icon></forge-open-icon>
                </div>
                <div>Panel Two Content</div>
              </forge-expansion-panel>
              <forge-divider></forge-divider>
              <forge-expansion-panel>
                <div slot="header">
                  Panel Three
                  <forge-open-icon></forge-open-icon>
                </div>
                <div>Panel Three Content</div>
              </forge-expansion-panel>
            </forge-accordion>
          </forge-card>

          <forge-card>
            <h1>Badge</h1>
            <div style={{display: 'flex', gap: '8px'}}>
              <forge-badge theme="default">default</forge-badge>
              <forge-badge theme="primary">Primary</forge-badge>
              <forge-badge theme="secondary">Secondary</forge-badge>
              <forge-badge theme="tertiary">Tertiary</forge-badge>
              <forge-badge theme="success">Success</forge-badge>
              <forge-badge theme="error">Error</forge-badge>
              <forge-badge theme="warning">Warning</forge-badge>
              <forge-badge theme="info">Info</forge-badge>
              <forge-badge theme="info-secondary">Info (secondary)</forge-badge>
            </div>
          </forge-card>

          <forge-card>
            <h1>Banner</h1>
            <div>
              <p>
                <forge-banner theme="error">Error</forge-banner>
              </p>
              <p>
                <forge-banner theme="warning">Warning</forge-banner>
              </p>
              <p>
                <forge-banner theme="success">Success</forge-banner>
              </p>
              <p>
                <forge-banner theme="info">Info (default)</forge-banner>
              </p>
              <p>
                <forge-banner theme="info-secondary">Info (secondary)</forge-banner>
              </p>
            </div>
          </forge-card>

          <forge-card>
            <h1>Button Toggle</h1>
            <forge-button-toggle-group aria-label="Choose communication type">
              <forge-button-toggle value="email">By email</forge-button-toggle>
              <forge-button-toggle value="mail">By mail</forge-button-toggle>
              <forge-button-toggle value="phone">By phone</forge-button-toggle>
            </forge-button-toggle-group>
          </forge-card>

          <forge-card>
            <h1>Calendar</h1>
            <forge-calendar view="month"></forge-calendar>
          </forge-card>

          <forge-card>
            <h1>Chip Field</h1>
            <forge-chip-field variant theme shape>
              <label slot="label" for="tag-input">Tags</label>
              <input type="text" id="tag-input" />
              <div slot="support-text">Press enter to create a tag</div>
            </forge-chip-field>
          </forge-card>

          <forge-card>
            <h1>Chips</h1>
            <p>
              <forge-chip-set>
                <forge-chip value="payments">Payments</forge-chip>
                <forge-chip value="bills">Bills</forge-chip>
                <forge-chip value="adjustments">Adjustments</forge-chip>
              </forge-chip-set>
            </p>

            <p>
              <forge-chip-set>
                <forge-chip value="payments" href="javascript: void(0);">
                  Anchor
                  <forge-icon name="open_in_new" slot="end"></forge-icon>
                </forge-chip>
              </forge-chip-set>
            </p>

            <p>
              <forge-chip-set>
                <forge-chip value="ruby">
                  <forge-avatar
                    size="small"
                    image-url="./ruby-side.jpg"
                    slot="start"
                  ></forge-avatar>
                  Ruby
                </forge-chip>
                <forge-chip value="leo">
                  <forge-avatar
                    size="small"
                    image-url="./leo.png"
                    slot="start"
                  ></forge-avatar>
                  Leo
                </forge-chip>
                <forge-chip value="harley">
                  <forge-avatar
                    size="small"
                    image-url="./harley.jpg"
                    slot="start"
                  ></forge-avatar>
                  Harley
                </forge-chip>
              </forge-chip-set>
            </p>
          </forge-card>

          <forge-card>
            <h1>Circular Progress</h1>
            <forge-circular-progress
              aria-label="Circular Progress"
            ></forge-circular-progress>
          </forge-card>

          <forge-card>
            <h1>Color Picker</h1>
            <forge-color-picker value="#000000"></forge-color-picker>
          </forge-card>

          <forge-card>
            <h1>Date Picker</h1>
            <p>
              <forge-date-picker>
                <forge-text-field>
                  <label for="date-picker">Date</label>
                  <input
                    aria-label="Pick a date"
                    type="text"
                    id="date-picker"
                    autocomplete="off"
                    placeholder
                  />
                </forge-text-field>
              </forge-date-picker>
            </p>

            <p>
              <forge-date-range-picker style={{width: '263px'}}>
                <forge-text-field>
                  <label for="input-date-range-picker-01">Date</label>
                  <input
                    type="text"
                    id="input-date-range-picker-01"
                    autocomplete="off"
                    placeholder="mm/dd/yyyy"
                  />
                  <input
                    type="text"
                    id="input-date-range-picker-02"
                    autocomplete="off"
                    placeholder="mm/dd/yyyy"
                  />
                </forge-text-field>
              </forge-date-range-picker>
            </p>
          </forge-card>

          <forge-card>
            <h1>Dialog</h1>
            <forge-button variant="raised">Show Dialog</forge-button>
            <forge-dialog
              aria-labelledby="dialog-title"
              aria-describedby="dialog-message"
            >
              <forge-scaffold>
                <forge-toolbar slot="header" no-divider>
                  <h1 class="forge-typography--heading4" id="dialog-title" slot="start">
                    Title text
                  </h1>
                  <forge-icon-button slot="end" aria-label="Close dialog">
                    <forge-icon name="close"></forge-icon>
                  </forge-icon-button>
                </forge-toolbar>
                <p slot="body" id="dialog-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed
                  pariatur error repellendus eos! Quas, optio esse ad illum quis
                  blanditiis rerum quia. Corrupti, ad hic velit praesentium voluptatum
                  dolores?
                </p>
                <forge-toolbar slot="footer" no-divider>
                  <forge-button slot="end" variant="raised">Close</forge-button>
                </forge-toolbar>
              </forge-scaffold>
            </forge-dialog>
          </forge-card>

          <forge-card>
            <h1>Expansion Panel</h1>
            <forge-expansion-panel>
              <button
                slot="header"
                type="button"
                aria-controls="content"
                aria-expanded="false"
              >
                Toggle
              </button>
              <div id="content" role="group">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus
                  ut illum corporis incidunt quod temporibus consequatur rem! Libero rem
                  nulla quod corporis similique consequuntur facere laborum veniam error
                  eius.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus
                  ut illum corporis incidunt quod temporibus consequatur rem! Libero rem
                  nulla quod corporis similique consequuntur facere laborum veniam error
                  eius.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus
                  ut illum corporis incidunt quod temporibus consequatur rem! Libero rem
                  nulla quod corporis similique consequuntur facere laborum veniam error
                  eius.
                </p>
              </div>
            </forge-expansion-panel>
          </forge-card>

          <forge-card>
            <h1>Form Utilities</h1>
            ...
          </forge-card>

          <forge-card>
            <h1>Floating Action Button</h1>
            <p>
              <forge-fab aria-label="Favorite">
                <forge-icon name="favorite"></forge-icon>
              </forge-fab>
            </p>

            <p>
              <forge-fab>
                <forge-icon name="add"></forge-icon>
                <span slot="label">Create</span>
              </forge-fab>
            </p>
          </forge-card>

          <forge-card>
            <h1>Focus Indicator</h1>
            <div style={{position: 'relative', display: 'inline flex'}}>
              <button id="target-btn" style={{height: '100px', width: '100px', outline: 'none'}}>
                Focus me
              </button>
              <forge-focus-indicator target="target-btn"></forge-focus-indicator>
            </div>
          </forge-card>

          <forge-card>
            <h1>Inline Message</h1>
            <p>
              <forge-inline-message>
                Qui nulla anim sunt eiusmod eiusmod id esse veniam proident ea adipisicing ad
                exercitation.
              </forge-inline-message>
            </p>

            <p>
              <forge-inline-message>
                <span slot="title">Lorem Ipsum</span>
                <p>
                  Qui nulla anim sunt eiusmod eiusmod id esse veniam proident ea adipisicing
                  ad exercitation.
                </p>
              </forge-inline-message>
            </p>

            <p>
              <div style={{display: 'flex', gap: '16px', flexDirection: 'column'}}>
                <forge-inline-message theme="error">
                  <forge-icon slot="icon" name="info"></forge-icon>
                  <p>
                    Qui nulla anim sunt eiusmod eiusmod id esse veniam proident ea adipisicing
                    ad exercitation.
                  </p>
                </forge-inline-message>

                <forge-inline-message theme="warning">
                  <forge-icon slot="icon" name="info"></forge-icon>
                  <p>
                    Qui nulla anim sunt eiusmod eiusmod id esse veniam proident ea adipisicing
                    ad exercitation.
                  </p>
                </forge-inline-message>

                <forge-inline-message theme="success">
                  <forge-icon slot="icon" name="info"></forge-icon>
                  <p>
                    Qui nulla anim sunt eiusmod eiusmod id esse veniam proident ea adipisicing
                    ad exercitation.
                  </p>
                </forge-inline-message>

                <forge-inline-message theme="info">
                  <forge-icon slot="icon" name="info"></forge-icon>
                  <p>
                    Qui nulla anim sunt eiusmod eiusmod id esse veniam proident ea adipisicing
                    ad exercitation.
                  </p>
                </forge-inline-message>

                <forge-inline-message theme="info-secondary">
                  <forge-icon slot="icon" name="info"></forge-icon>
                  <p>
                    Qui nulla anim sunt eiusmod eiusmod id esse veniam proident ea adipisicing
                    ad exercitation.
                  </p>
                </forge-inline-message>
              </div>
            </p>
          </forge-card>

          <forge-card>
            <h1>Linear Progress</h1>
            <forge-linear-progress
              aria-label="Linear progress demo"
            ></forge-linear-progress>
          </forge-card>

          <forge-card>
            <h1>Menu</h1>
            <forge-menu>
              <forge-button type="button" variant="raised">Menu</forge-button>
            </forge-menu>
          </forge-card>

          <forge-card>
            <h1>Page State</h1>
            <forge-page-state>
              <img
                src="https://cdn.forge.tylertech.com/v1/images/spot-hero/404-error-spot-hero.svg"
                alt
                slot="graphic"
              />
              <div slot="title">Nothing but tumbleweeds here...</div>
              <p slot="message">
                Even our best explorer couldn't find the page you're looking for. It might
                have been removed or you may have mistyped the URL.
              </p>
              <forge-button variant="raised" slot="action">Go back</forge-button>
              <forge-button variant="outlined" slot="action">Refresh</forge-button>
            </forge-page-state>
          </forge-card>

          <forge-card>
            <h1>Paginator</h1>
            <forge-paginator total="100"></forge-paginator>
          </forge-card>

          <forge-card>
            <h1>Popover</h1>
            <forge-button id="popover-trigger" variant="raised">Show Popover</forge-button>
            <forge-popover
              anchor="popover-trigger"
              placement="bottom"
              position-strategy="fixed"
            >
              <forge-scaffold>
                <forge-toolbar no-border slot="header">
                  <h2 className="forge-typography--heading4" slot="start">Popover Title</h2>
                </forge-toolbar>
                <div
                  slot="body"
                  style={{ width: "300px" }}
                >
                  Popover content
                </div>
                <forge-toolbar no-border slot="footer">
                  <forge-button slot="end" variant="filled">Close</forge-button>
                </forge-toolbar>
              </forge-scaffold>
            </forge-popover>
          </forge-card>

          <forge-card>
            <h1>Skeleton</h1>
            <p>
              <h3>Default</h3>
              <forge-skeleton></forge-skeleton>
            </p>

            <p>
              <h3>Profile</h3>
              <div style={{width: '200px'}}>
                <forge-skeleton avatar></forge-skeleton>
                <forge-skeleton text></forge-skeleton>
                <forge-skeleton text></forge-skeleton>
                <forge-skeleton text style={{width: '75%'}}></forge-skeleton>
              </div>
            </p>

            <p>
              <h3>List</h3>
              <div style={{width: '200px'}}>
                <forge-skeleton list-item></forge-skeleton>
                <forge-skeleton list-item></forge-skeleton>
                <forge-skeleton list-item></forge-skeleton>
              </div>
            </p>

            <p>
              <h3>Chips</h3>
              <div style={{width: '200px'}}>
                <forge-skeleton chip></forge-skeleton>
                <forge-skeleton chip></forge-skeleton>
                <forge-skeleton chip></forge-skeleton>
              </div>
            </p>

            <p>
              <h3>Buttons</h3>
              <div style={{width: '200px'}}>
                <forge-skeleton button></forge-skeleton>
                <forge-skeleton button></forge-skeleton>
                <forge-skeleton button></forge-skeleton>
              </div>
            </p>

            <p>
              <h3>Form Field</h3>
              <div style={{width: '200px'}}>
                <forge-skeleton form-field></forge-skeleton>
                <forge-skeleton form-field></forge-skeleton>
                <forge-skeleton form-field></forge-skeleton>
              </div>
            </p>
          </forge-card>

          <forge-card>
            <h1>Slider</h1>
            <forge-slider data-aria-label="Value"></forge-slider>
          </forge-card>

          <forge-card>
            <h1>Split Button</h1>
            <forge-split-button variant="raised" theme="primary">
              <forge-button style={{minWidth: '100px'}} variant="raised">Send</forge-button>
              <forge-menu>
                <forge-button
                  aria-label="Show menu"
                  popover-icon
                  variant="raised"
                ></forge-button>
              </forge-menu>
            </forge-split-button>
          </forge-card>

          <forge-card>
            <h1>Stepper</h1>
            <p>
              <forge-stepper>
                <forge-step>Step 1</forge-step>
                <forge-step>
                  Step 2
                  <span slot="optional">Optional</span>
                </forge-step>
                <forge-step>
                  <div slot="expansion-content">Expansion Content</div>
                  Step 3
                </forge-step>
                <forge-step>Step 4</forge-step>
              </forge-stepper>
            </p>

            <p>
              <forge-stepper vertical>
                <forge-step>Step 1</forge-step>
                <forge-step>
                  Step 2
                  <span slot="optional">Optional</span>
                </forge-step>
                <forge-step>
                  <div slot="expansion-content">Expansion Content</div>
                  Step 3
                </forge-step>
                <forge-step>Step 4</forge-step>
              </forge-stepper>
            </p>
          </forge-card>

          <forge-card>
            <h1>Tabs</h1>
            <forge-tab-bar data-aria-label="Demo tabs" active-tab="0">
              <forge-tab>Tab 1</forge-tab>
              <forge-tab>Tab 2</forge-tab>
              <forge-tab>Tab 3</forge-tab>
            </forge-tab-bar>
          </forge-card>

          <forge-card>
            <h1>Time Picker</h1>
            <forge-time-picker use-24-hour-time="false" allow-invalid-time="false">
              <forge-text-field>
                <input id="time-picker" type="text" />
                <label for="time-picker">Time</label>
              </forge-text-field>
            </forge-time-picker>
          </forge-card>

          <forge-card>
            <h1>Toast</h1>
            <forge-button variant="raised">Show Toast</forge-button>
            <forge-toast>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </forge-toast>
          </forge-card>

          <forge-card>
            <h1>Toolbar</h1>
            <forge-toolbar>
              <div slot="before-start">Before start</div>
              <div slot="start">Start</div>
              <div slot="center">Center</div>
              <div slot="end">End</div>
              <div slot="after-end">After end</div>
            </forge-toolbar>
          </forge-card>

          <forge-card>
            <h1>Tooltip</h1>
            <forge-button variant="raised">Hover me</forge-button>
            <forge-tooltip>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </forge-tooltip>
          </forge-card>
        </main>

        <forge-footer slot="footer">
          <p>My Footer</p>
        </forge-footer>
      </forge-scaffold>
    </div>
  );
}
