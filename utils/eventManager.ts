interface Observer {
    update(event: string): void;
}

class EventManager {
    private observers: Observer[] = [];

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    notify(event: string) {
        this.observers.forEach(obs => obs.update(event));
    }
}
//Defines a one-to-many dependency so that when one object changes state, all dependents are notified.
// This is useful for implementing event-driven architectures, where multiple components need to react to the same event.
// The EventManager class allows you to subscribe observers and notify them of events.
// The Observer interface defines the update method that observers must implement.
// The subscribe method adds an observer to the list of observers.