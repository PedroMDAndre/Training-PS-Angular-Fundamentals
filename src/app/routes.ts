import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.components";
import { Error404Component } from "./errors/404.components";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";

export const appRoutes: Routes = [
    { path: "events", component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: "events/new", component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: "events/:id", component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: "404", component: Error404Component },
    { path: "", redirectTo: "/events", pathMatch: "full" },
    {
        path: "user",
        loadChildren: () => import("./user/user.module")
            .then(m => m.UserModule)
    }
];