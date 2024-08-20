import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/image";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
export default function Cos214Page() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center gap-y-36">
          <h1 className={title()}>Cos 214</h1>
          <div className="text-start">
            <p>
              What is the difference between overriding
              and overloading?
              <br />
              overriding is when the signature (name and
              parameters) of a method are the same in the
              base and derived classes. If the method has a
              different return type, we refer to the methods
              as having covariant return types.
              <br />
              overloading is when two or more methods in
              the same class have the same name, but
              different parameters.
            </p>
          </div>
          <br />
          <p>
            Polymorphism is a concept in computer science that allows objects
            to take on different forms or behaviors. It's a key component of object-oriented programming (OOP)
            and is derived from the Greek word meaning ’having multiple forms’
          </p>
          <br />
          <p>
            Encapsulation is a fundamental concept in object-oriented programming (OOP)
            that involves bundling data and methods into a single unit.
            This unit can be a container, class, or object. Encapsulation can also refer to
            limiting direct access to some of the data, such as an object’s components
          </p>
          <br />
          <p>
            The relationships between objects are the
            main influencers of the delegation strategy,
            while the relationships between classes are
            the main focus of the inheritance strategy.
          </p>
          <Image
            width={500}
            alt="NextUI hero Image"
            src="Delegation.png"
          />
          <div>
            <h1 className={title()}>Introduction to design patterns</h1>
            <Image
              width={500}
              alt="NextUI hero Image"
              src="Relations.png"
            />
            <Image
              width={500}
              alt="NextUI hero Image"
              src="Table.png"
            />
            <br />
            <h1 className={title()}>Class diagram</h1>
            <p>
              A class diagram show the classes that an object-oriented system comprises of as well as
              the relationships between these classes. The internal structure of the class is described
              in terms of attributes and operations. The relationships are of two types, those that
              are related to the structure of the class and those that show the messages to be passed
              between the classes
            </p>
            <Image
              width={500}
              alt="NextUI hero Image"
              src="ExampleUML.png"
            />
            <h1 className={title()}>Object diagrams</h1>
            <p>
              Object diagrams are a special type of class diagram. An object diagram depicts the state
              of a system at a particular point in time. Object diagrams preserve the relationships
              between objects and show the current “state” or values of the attributes of the particular
              instances of the classes at a specific point in time. Figure 3 shows the state of the objects
              in the class diagram that was given in Figure 2 at a specific point in time while a user
              called John Doe was doing a transaction on his savings account at a specific ATM in the
              Hatfield Plaza.
            </p>
            <Image
              width={500}
              alt="NextUI hero Image"
              src="Object.png"
            />
            <Image
              width={500}
              alt="NextUI hero Image"
              src="ExampleObject.png"
            />
            <h1 className={title()}>Memento</h1>
            <h1 className="text-4xl">Intent: </h1>
            <p>Without violating encapsulation, capture
              and externalise an objects internal state so
              that the object can be restored to this state
              later.</p>
            <Image
              width={500}
              alt="NextUI hero Image"
              src="Memento.png"
            />
            <Tabs aria-label="Options" placement="start" radius="none">
              <Tab key="photos" title="Memento">
                <Card>
                  <CardBody>
                    Stores internal state of the Originator
                    object.
                    Protects against access by objects other
                    than the originator
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="Originator">
                <Card>
                  <CardBody>
                    Creates a memento containing a
                    snapshot of its current internal state
                    (createMemento).
                    Uses the memento to restore its internal
                    state (setMemento).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="videos" title="Caretaker">
                <Card>
                  <CardBody>
                    is responsible for the safekeeping of the
                    memento’s state,never operates on or examines the
                    contents of a memento.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
            <h1 className={title()}>Template</h1>
            <h1 className="text-4xl">Intent: </h1>
            <p>Define the skeleton of an algorithm in an operation, deferring some steps to
              subclasses. Template Method lets subclasses redefine certain steps of an algorithm
              without changing the algorithm’s structure.</p>
            <Image
              width={500}
              alt="NextUI hero Image"
              src="Template.png"
            />
            <Tabs aria-label="Options" placement="start" radius="none">
              <Tab key="photos" title="AbstractClass">
                <Card>
                  <CardBody>
                    defines abstract primitive operations
                    that need to be defined by the concrete
                    classes.implements the template method
                    operation that provides a skeleton of an
                    algorithm
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="ConcreteClasss">
                <Card>
                  <CardBody>
                    implements the primitive operations
                    defined by the Abstract class
                  </CardBody>
                </Card>
              </Tab>

            </Tabs>
            <h1 className={title()}>Prototype</h1>
            <h1 className="text-4xl">Intent: </h1>
            <p>Specify the kinds of objects to create using
              a prototypical instance, and create new
              objects by copying this prototype</p>
              <p>
              Gives flexible alternatives to inheritance
The client creates a prototype and each
time it requires a new object, the
prototype is asked to clone itself
The state of this clone may be that of
the current object, or that of the initial
object.
              </p>
            <Image
              width={500}
              alt="NextUI hero Image"
              src="Prototype.png"
            />
            <Tabs aria-label="Options" placement="start" radius="none">
              <Tab key="photos" title="Prototype">
                <Card>
                  <CardBody>
                  defines an interface for cloning
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="ConcretePrototypeN">
                <Card>
                  <CardBody>
                  implementation of operation for cloning
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="videos" title="Client">
                <Card>
                  <CardBody>
                  asks the prototype to clone so that a
                  new object can be created
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
            <h1 className={title()}>Factory</h1>
            <h1 className="text-4xl">Intent: </h1>
            <p>Define an interface for creating an object,
              but let subclasses decide which class to
              instantiate. Factory Method lets a class defer
              instantiation to subclasses.</p>
            <Image
              width={500}
              alt="NextUI hero Image"
              src="Factory.png"
            />

            <h1 className={title()}>Abstract factory</h1>
            <h1 className="text-4xl">Intent: </h1>
            <p>Provide an interface for creating families of
              related or dependent objects without
              specifying the concrete classes.</p>
            <Image
              width={500}
              alt="NextUI hero Image"
              src="AbstractFactory.png"
            />

            <h1 className={title()}>Strategy</h1>
            <h1 className="text-4xl">Intent: </h1>
            <p>Define a family of algorithms, encapsulate
              each one, and make them interchangeable.
              Strategy lets the algorithm vary
              independently from clients that use it.</p>
            <Image
              width={500}
              alt="NextUI hero Image"
              src="Strategy.png"
            />

            <h1 className={title()}>State</h1>
            <h1 className="text-4xl">Intent: </h1>
            <p>Allow an object to alter its behaviour when
              its internal state changes.The object will
              appear to change its class.</p>
            <Image
              width={500}
              alt="NextUI hero Image"
              src="State.png"
            />

          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
