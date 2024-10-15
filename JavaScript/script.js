let dataTable;
let dataTableInicializado=false;
const dataTableOptions={
    columnDefs: [{className: "centered",targets:[0,1,2,3,4,5,6,7,8]},
                 {orderable: false,targets:[6,8]}],
    pageLength: 3,
    destroy: true,
    language:{
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }

};
const inicilizarDataTable=async()=>{
    if(dataTableInicializado){
        dataTable.destroy();
    }
    dataTable=$("#datatable_users").DataTable(dataTableOptions);
    dataTableInicializado=true;
};
window.addEventListener("load", async() =>{
    await inicilizarDataTable();
});
$(document).ready(function() {

    $('#loadCalendar').click(function(e) {
        e.preventDefault();
        
        $('#content-section').load('Horario.html', function() {
            
            var calendarEl = document.getElementById('calendar');
            if (calendarEl) {
                var calendar = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'timeGridWeek',
                    locale: 'es',
                    firstDay: 1,
                    slotMinTime: "00:00:00",
                    slotMaxTime: "24:00:00",
                    allDaySlot: false,
                    slotLabelFormat: {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true  // Formato 12 horas con AM/PM
                    },
                    events: [
                        {
                            title: 'Trabajo',
                            start: '2024-10-12T08:00:00', // Inicia a las 8:00 a.m.
                            end: '2024-10-12T13:00:00',   // Termina a la 1:00 p.m.
                            color: '#1E90FF',             // Color del evento
                            textColor: '#FFFFFF',
                        },
                        {
                            title: 'Descanso',
                            start: '2024-10-12T13:00:00', 
                            end: '2024-10-12T15:00:00',   
                            color: '#FFD700',             
                            textColor: '#000000'          
                        },
                        {
                            title: 'Culmina su jornada',
                            start: '2024-10-12T15:00:00', 
                            end: '2024-10-12T17:00:00',  
                            color: '#1E90FF',             
                            textColor: '#FFFFFF'          
                        }
                    ],
                    eventDidMount: function(info) {
                        info.el.style.alignItems='center';
                        info.el.style.borderRadius = '5px';
                        info.el.style.color = '#FFFFFF';           
                    }
                });
                calendar.render();
                
                
                $('#calendar .fc-timegrid-slot-label').css({
                    'font-weight': 'bold',
                });
            }
        });
    });
});
$(document).ready(function() {
    $('#loadPagos').click(function(e){
        e.preventDefault();
        $('#content-section').load('pago.html')
    })
});
$(document).ready(function() {
    $('#loadArea').click(function(e){
        e.preventDefault();
        $('#content-section').load('area.html')
    })
});
$(document).ready(function() {
    $('#loadAsistencia').click(function(e){
        e.preventDefault();
        $('#content-section').load('asistencia.html')
    })
});