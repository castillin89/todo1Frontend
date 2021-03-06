import { MatDialogConfig, MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { isUndefined } from 'util';

export abstract class BaseComponent {
  deleteMessage = 'Eliminando';
  editMessage = 'Editando';
  createMessage = 'Creando';
  loadingMessage = 'Cargando';
  loginMessage = 'Iniciando Sesión';

  snackMessage = 'Mensaje del sistema';
  snackAction = 'Action';
  snackTime = 2000;

  userData;

  errorMessage = ``;

  constructor(private snackBar?: MatSnackBar, private route?: Router) { }

  /** Función que se sobreescribe en cada componente, es llamada cuando se cierra una ventana emergente
   * @param  {JSON} data Data para comunicar la ventana emergente con el componente
   */
  afterCloseDialog(data) { }

  /** unción que se sobreescribe en cada componente, es llamada cuando el usuario selecciona una acción de una fila dentro de una tabla
   * @param  {object} event Data del objeto sobre el que se realizó la acción
   */
  action(event) { }

  /** Abre una ventana emergente, función llamada desde un componente
   * @param  {ComponentOrTemplateRef} component Componente que se mostrará en la ventana emergente
   * @param  {JSON} dataDialog? Data para comunicar el componente y la ventana emergente
   * @param  {string} classDialog? Nombre de la clase CSS
   */

  /** Cierra todas las ventanas emergentes
   */
  

  /**
     * @param  {string} snackMessage Mensaje que se mostrará en el snackBar
     * @param  {string} snackAction? Nombre de la acción que se mostrará en el snackBar
     * @param  {string} idAction? ID de la acción, será enviado si el usuario oprime el botón de acción
     * @param  {string} cssClass? Clase de CSS con la que quedará el snackBar
     */


  getErrorMessage(fieldFormGroup) {
    const ERROR = fieldFormGroup.errors;
    let message = '';
    if (!isUndefined(ERROR['required'])) {
      message = 'Debe ingresar este campo';
    } else if (
      !isUndefined(ERROR['minlength']) ||
      !isUndefined(ERROR['maxlength']) ||
      !isUndefined(ERROR['pattern'])
    ) {
      message = 'Número inválido';
    }
    return message;
  }

}
