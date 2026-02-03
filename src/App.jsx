import React, { useState } from "react"; // Added missing useState import
import SidebarLayout from "./Components/Task1";
import "./Components/Task.css";
import SimpleMenu from "./Components/Task2.jsx";
import Dropdown from "./Components/Task3.jsx";
import Tooltip from "./Components/Task4.jsx";
import Accordion from "./Components/Task5.jsx";
import Modal from "./Components/Task67.jsx";
import Task8Notification from "./Components/Tasak8.jsx";
import Task9StickyHeader from "./Components/Task9.jsx";
import Task10BackToTop from "./Components/Task10.jsx";
import Task11ResponsiveNav from "./Components/Task11.jsx";
import Task12Form from "./Components/Task12.jsx";
import Task13FocusHelper from "./Components/Task13.jsx";
import Task14PasswordStrength from "./Components/Task14.jsx";
import PasswordToggle from "./Components/Task15.jsx";
import MultiSelect from "./Components/Task16.jsx";
import TagFilter from "./Components/Task17.jsx";
import SearchList from "./Components/Seacrh18.jsx";
import SortedList from "./Components/Task19.jsx";
import FilterWithCount from "./Components/Task20.jsx";
import Pagination from "./Components/Task21.jsx";
import Task22 from "./Components/Task22.jsx";
import StepProgress from "./Components/Task23.jsx";
import StepNavigation from "./Components/Task24.jsx";
import ValidatedSteps from "./Components/Task25.jsx";
import OrderSummary from "./Components/Task26.jsx";
import ShoppingCart from "./Components/Task27.jsx";
import CartWithRemoval from "./Components/Task28.jsx";
import CartWithDiscount from "./Components/Task29.jsx";
import MyForm from "./Components/Task30.jsx";
import DynamicModalDemo from "./Components/Task32.jsx";
import FormInput from "./Components/Task33.jsx";
import ValidatedInput from "./Components/Task34.jsx";
import StatusAlert from "./Components/Task35.jsx";
import AlertComponent from "./Components/Task36.jsx";
import Table from "./Components/Task37.jsx";
import Tables from "./Components/Task39.jsx";
import Table2 from "./Components/Task40.jsx";
import DependentForm from "./Components/Task41.jsx";
import ValidatedForm from "./Components/Task42.jsx";
import DeleteConfirmationDemo from "./Components/Task43.jsx";
import UndoDeleteDemo from "./Components/Task44.jsx";
import LivePreviewEditor from "./Components/Task45.jsx";
import SyncedInputs from "./Components/Task46.jsx";
import UserSettings from "./Components/Usersetting.jsx";
import PersistentCounter from "./Components/Task48.jsx";
import DataFetcher from "./Components/Task49.jsx";
import DataFetcherWithLoader from "./Components/Task50.jsx";
function App() {
  // Logic and state must be outside the return
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalA, setModalA] = useState(false);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Please enter a valid email.";
    } else if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters.";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value); // Dynamic validation on change
  };
  const [email, setEmail] = useState("");

  const validateEmail = (value) => {
    if (!value) return "Email is required.";
    if (!value.includes("@")) return "Must be a valid email address.";
    return null;
  };
  const rows = [
    { id: 1, firstName: "Alice", title: "Engineer" },
    { id: 2, firstName: "Bob", title: "Designer" },
  ];

  // 2. Define your Headers and Keys (columns prop)
  const headers = [
    { key: "firstName", label: "First Name" }, // key matches the object property
    { key: "title", label: "Job Title" },
  ];
  const simulateApiCall = (dataToReturn, delay = 1000) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataToReturn);
      }, delay);
    });
  };
  return (
    <div>
      <h3>Task no 1: Build a toggleable sidebar layout.</h3>
      <SidebarLayout />
      <hr />

      <h3>Task no 2: Highlight active menu item on click.</h3>
      <SimpleMenu />
      <hr />

      <h3>Task no 3: Create a dropdown that closes when clicking outside.</h3>
      <Dropdown />
      <hr />

      <h3>Task no 4: Show tooltip on hover and hide on mouse leave.</h3>
      <Tooltip text="This is a helpful hint!">
        <button>Hover Me</button>
      </Tooltip>
      <hr />

      <h3>
        Task no 5: Build an accordion where only one section opens at a time.
      </h3>
      <Accordion />
      <hr />

      <h3>
        Task no 6: Create a modal that closes on ESC key and
        <br /> Task no 7: Disable background scroll when modal is open
      </h3>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Dynamic Modal"
      >
        <p>Press the ESC key or click outside to close this modal!</p>
      </Modal>
      <hr />
      <h3>
        Task no 8: Build a notification banner that auto-hides after 3 seconds.
      </h3>
      <Task8Notification />
      <hr />
      <h3>Task no 9:</h3>
      <div>
        <Task9StickyHeader />

        <div style={{ height: "200vh" }}>
          <p>Scroll down to see the header change styles!</p>
        </div>
      </div>
      <hr />
      <h3>Task no 10: Show “Back to Top” button after scrolling 200px.</h3>
      <Task10BackToTop />
      <hr />
      <h3>Task no 11:Create a responsive navbar toggle (state-based).</h3>
      <Task11ResponsiveNav />

      <hr />
      <h3>Task no 12: Highlight form field on focus.</h3>
      <Task12Form />
      <hr />
      <h3>Task no 13: Show helper text while input is focused.</h3>
      <Task13FocusHelper />
      <hr />
      <h3>Task no 14:Show password strength indicator while typing. </h3>
      <Task14PasswordStrength />
      <hr />
      <h3>Task no 15:Toggle password visibility.</h3>
      <PasswordToggle />
      <hr />
      <h3>Task no 16:Build a multi-select dropdown.</h3>
      <MultiSelect />
      <hr />
      <h3>Task no 17: Filter list based on selected tags.</h3>
      <TagFilter />
      <hr />
      <h3>Task no 18: Create a search with debounce logic. </h3>
      <SearchList />
      <hr />
      <h3>Task no 19: Implement list sorting (A–Z / Z–A).</h3>
      <SortedList />
      <hr />
      <h3>Task no 20: Show total count after filtering.</h3>
      <FilterWithCount />
      <hr />
      <h3>Task no 21: Paginate a list (manual logic).</h3>
      <Pagination />
      <hr />
      <h3>Task no 22: Disable pagination buttons at limits.</h3>
      <Task22 />
      <hr />
      <h3>Task no 23:Build a step progress indicator. </h3>
      <StepProgress />
      <hr />
      <h3>Task no 24: Move between steps with Next / Previous.</h3>
      <StepNavigation />
      <hr />
      <h3>Task no 25: Prevent moving to next step unless condition met.</h3>
      <ValidatedSteps />
      <hr />
      <h3>Task no 26:Calculate subtotal and total from item list.</h3>
      <OrderSummary />
      <hr />
      <h3>Task no 27: Update total when quantity changes.</h3>
      <ShoppingCart />
      <hr />
      <h3>Task no 28: Remove item and recalculate total.</h3>
      <CartWithRemoval />
      <hr />
      <h3>Task no 29: Apply discount conditionally.</h3>
      <CartWithDiscount />
      <hr />
      <h3>Task no 30: Reset all values to initial state.</h3>
      <MyForm />
      <hr />
      <h3>Task no 31: Create a reusable modal component.</h3>
      {/* Usage 1: Simple Info */}
      <button onClick={() => setModalA(true)}>Open Task 6 Modal</button>
      <Modal
        isOpen={modalA}
        onClose={() => setModalA(false)}
        title="Task 6 Info"
      >
        <p>This modal uses children to show this text.</p>
      </Modal>
      <hr />
      <h3>Task no 32: Pass dynamic content to modal.</h3>
      <DynamicModalDemo />
      <hr />
      <h3>Task no 33: Create a reusable input component with validation.</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormInput
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <button type="submit">Sign Up</button>
      </form>
      <hr />
      <h3>Task no 34: Display validation errors inline.</h3>
      <div style={{ padding: "2rem", maxWidth: "400px" }}>
        <ValidatedInput
          label="Email Address"
          name="user_email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validationRules={validateEmail}
        />
      </div>
      <hr />
      <h3>Task no 35: Build a reusable alert component.</h3>
      <StatusAlert
        variant="success"
        title="Payment Successful"
        message="Your transaction has been processed."
      />
      <StatusAlert
        variant="error"
        message="Invalid credentials. Please try again."
        onClose={() => console.log("Alert closed")}
      />
      <hr />

      <h3>Task 32: Support success / error / warning variants.</h3>
      <AlertComponent variant="success" message="Your data has been saved." />
      <AlertComponent variant="error" message="A connection error occurred." />
      <AlertComponent variant="warning" message="Your session expires soon." />
      <hr />
      <h3>Task no 37: Create a reusable table component.</h3>
      <Table />
      <hr />
      <h3>Task no 38:Pass column headers and rows as props. </h3>
      <Table data={rows} columns={headers} />
      <hr />
      <h3>Task no 39: Handle empty table state.</h3>
      <Tables />
      <hr />
      <h3>Task no 40: Add row highlight on hover.</h3>
      <Table2 />
      <hr />
      <h3>Task no 41: Build a form with dependent fields.</h3>
      <DependentForm />
      <hr />
      <h3>Task no 42: Enable submit button only when form is valid.</h3>
      <ValidatedForm />
      <hr />
      <h3>Task no 43: Show confirmation dialog before delete</h3>
      <DeleteConfirmationDemo />
      <hr />
      <h3>Task no 44: Implement undo delete functionality.</h3>
      <UndoDeleteDemo />
      <hr />
      <h3>Task no 45:Create a live preview while typing content. </h3>
      <LivePreviewEditor />
      <hr />
      <h3>Task no 46: Sync two inputs (change one updates the other).</h3>
      <SyncedInputs />
      <hr />
      <h3>Task no 47: Persist UI state using localStorage.</h3>
      <UserSettings />
      <hr />
      <h3>Task no 48: Restore UI state on page reload.</h3>
      <PersistentCounter />
      <hr />
      <h3>Task no 49: Simulate API delay using setTimeout</h3>
      <DataFetcher />
      <hr />
      <h3>Task no 50: Show loader during simulated API call.</h3>
      <DataFetcherWithLoader />
    </div>
  );
}

export default App;
