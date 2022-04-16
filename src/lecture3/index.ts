import { Invoice, Payment } from "./classImplementInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice("kytek", "coder", 500000);
const documentTwo: hasPrint = new Payment("Viet nam", "fly", 25000);

const allDocuments: hasPrint[] = [];

allDocuments.push(documentOne);
allDocuments[0].print();
