 // Example usage
  const telephone = new Telephone();
  
  // Create observers
  const observer1 = new PhoneObserver();
  const observer2 = new SimpleObserver();
  
  // Add observers to the telephone
  telephone.addObserver(observer1);
  telephone.addObserver(observer2);
  
  // Add phone numbers
  telephone.addPhoneNumber("1234567890");
  telephone.addPhoneNumber("2345678901");
  
  // Dial a phone number
  telephone.dialPhoneNumber("1234567890");
  telephone.dialPhoneNumber("2345678901");
  telephone.dialPhoneNumber("3456789012"); // This number is not added, so observers won't be notified
  
// Observer class
class PhoneObserver {
    update(phoneNumber) {
      console.log(`Now Dialing: ${phoneNumber}`);
    }
  }
  
  class SimpleObserver {
    update(phoneNumber) {
      console.log(phoneNumber);
    }
  }
  
  // Telephone class
  class Telephone {
    constructor() {
      this.phoneNumbers = new Set();
      this.observers = [];
    }
  
    // Method to add observers
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Method to remove observers
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    // Method to notify observers
    notifyObservers(phoneNumber) {
      this.observers.forEach((observer) => {
        observer.update(phoneNumber);
      });
    }
  
    // Method to add a new phone number
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.add(phoneNumber);
    }
  
    // Method to remove a phone number
    removePhoneNumber(phoneNumber) {
      this.phoneNumbers.delete(phoneNumber);
    }
  
    // Method to dial a phone number and notify observers
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.has(phoneNumber)) {
        this.notifyObservers(phoneNumber);
      } else {
        console.log("Phone number not found.");
      }
    }
  }
  